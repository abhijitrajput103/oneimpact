/**
 * Comprehensive Image Optimizer for One Impact.
 *
 * Scans the entire public/ directory recursively and converts PNG/JPG/JPEG images
 * into modern, ultra-lightweight WebP and AVIF formats while preserving full visual quality
 * and alpha transparency.
 *
 * Usage:
 *   node scripts/optimize-images.js                 # Convert all images to WebP and AVIF
 *   node scripts/optimize-images.js --webp-only      # Only generate WebP
 *   node scripts/optimize-images.js --avif-only      # Only generate AVIF
 *   node scripts/optimize-images.js --force          # Re-process existing files
 *   node scripts/optimize-images.js --update-code    # Also update .tsx/.css code references
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const args = process.argv.slice(2);
const force = args.includes("--force");
const webpOnly = args.includes("--webp-only");
const avifOnly = args.includes("--avif-only");
const updateCode = args.includes("--update-code");

const generateWebP = !avifOnly;
const generateAvif = !webpOnly;

const IMAGE_EXTS = [".png", ".jpg", ".jpeg"];

function findFilesRecursive(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findFilesRecursive(fullPath, exts));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

function getOptimizationRules(filePath) {
  const normPath = filePath.replace(/\\/g, "/");
  const basename = path.basename(filePath).toLowerCase();

  // Stickers & Small Icons (render at <= 120px)
  if (normPath.includes("/icons/")) {
    return { webpQuality: 83, avifQuality: 75, resize: { width: 96, height: 96, fit: "inside", withoutEnlargement: true } };
  }
  if (normPath.includes("/stickers/")) {
    return {
      webpQuality: 82,
      avifQuality: 75,
      resize: { width: 320, height: 320, fit: "inside", withoutEnlargement: true },
    };
  }

  // Logos (need high clarity and sharp alpha)
  if (normPath.toLowerCase().includes("/logo/")) {
    return {
      webpQuality: 88,
      avifQuality: 80,
      resize: { width: 800, height: 400, fit: "inside", withoutEnlargement: true },
    };
  }

  // Service Cards & Home Service Torn Paper Cards (retina card displays)
  if (normPath.includes("/home-services/") || normPath.includes("/services/")) {
    return {
      webpQuality: 84,
      avifQuality: 76,
      resize: { width: 1400, withoutEnlargement: true },
    };
  }

  // Reel Thumbnails
  if (normPath.includes("/reels/")) {
    return {
      webpQuality: 80,
      avifQuality: 72,
      resize: { width: 720, withoutEnlargement: true },
    };
  }

  // Hero, Collages & Full Banners (e.g. Mumbai collage, principles)
  if (basename.includes("hero") || basename.includes("collage") || basename.includes("philosophy") || basename.includes("principles")) {
    return {
      webpQuality: 82,
      avifQuality: 74,
      resize: { width: 1920, withoutEnlargement: true },
    };
  }

  // Default photography / graphics
  return {
    webpQuality: 80,
    avifQuality: 72,
    resize: { width: 1920, withoutEnlargement: true },
  };
}

async function optimizeImage(filePath, stats) {
  const ext = path.extname(filePath).toLowerCase();
  const relPath = path.relative(PUBLIC_DIR, filePath);
  const srcStat = fs.statSync(filePath);
  const srcSize = srcStat.size;

  stats.totalOriginalBytes += srcSize;
  stats.totalImagesProcessed += 1;

  const rules = getOptimizationRules(filePath);
  const baseWithoutExt = filePath.slice(0, -ext.length);

  const webpPath = baseWithoutExt + ".webp";
  const avifPath = baseWithoutExt + ".avif";

  let didProcess = false;

  // 1. WebP Conversion
  if (generateWebP) {
    const webpExists = fs.existsSync(webpPath);
    const shouldConvert = force || !webpExists || (webpExists && fs.statSync(webpPath).mtimeMs < srcStat.mtimeMs);

    if (shouldConvert) {
      try {
        let pipeline = sharp(filePath);
        if (rules.resize) {
          pipeline = pipeline.resize(rules.resize);
        }
        await pipeline
          .webp({
            quality: rules.webpQuality,
            alphaQuality: 90,
            effort: 6,
          })
          .toFile(webpPath);

        const newSize = fs.statSync(webpPath).size;
        if (newSize >= srcSize) {
          fs.unlinkSync(webpPath);
          console.log(`  [WebP] - ${relPath} original is already smaller (${(srcSize / 1024).toFixed(0)}KB vs ${(newSize / 1024).toFixed(0)}KB), kept original`);
        } else {
          const savedPercent = ((1 - newSize / srcSize) * 100).toFixed(1);
          stats.totalWebpBytes += newSize;
          stats.webpConverted += 1;
          console.log(
            `  [WebP] ✓ ${relPath}  ${(srcSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${savedPercent}%)`
          );
          didProcess = true;
        }
      } catch (err) {
        console.error(`  [WebP] ✗ Failed for ${relPath}: ${err.message}`);
      }
    } else {
      stats.totalWebpBytes += fs.statSync(webpPath).size;
      stats.webpSkipped += 1;
    }
  }

  // 2. AVIF Conversion
  if (generateAvif) {
    const avifExists = fs.existsSync(avifPath);
    const shouldConvert = force || !avifExists || (avifExists && fs.statSync(avifPath).mtimeMs < srcStat.mtimeMs);

    if (shouldConvert) {
      try {
        let pipeline = sharp(filePath);
        if (rules.resize) {
          pipeline = pipeline.resize(rules.resize);
        }
        await pipeline
          .avif({
            quality: rules.avifQuality,
            effort: 4,
          })
          .toFile(avifPath);

        const newSize = fs.statSync(avifPath).size;
        if (newSize >= srcSize) {
          fs.unlinkSync(avifPath);
          console.log(`  [AVIF] - ${relPath} original is already smaller (${(srcSize / 1024).toFixed(0)}KB vs ${(newSize / 1024).toFixed(0)}KB), kept original`);
        } else {
          const savedPercent = ((1 - newSize / srcSize) * 100).toFixed(1);
          stats.totalAvifBytes += newSize;
          stats.avifConverted += 1;
          console.log(
            `  [AVIF] ✓ ${relPath}  ${(srcSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${savedPercent}%)`
          );
          didProcess = true;
        }
      } catch (err) {
        console.error(`  [AVIF] ✗ Failed for ${relPath}: ${err.message}`);
      }
    } else {
      stats.totalAvifBytes += fs.statSync(avifPath).size;
      stats.avifSkipped += 1;
    }
  }

  return didProcess;
}

function updateCodeReferences() {
  console.log("\n🔄 Updating code references to .webp format...");
  const codeFiles = findFilesRecursive(ROOT_DIR, [".tsx", ".ts", ".jsx", ".js", ".css"]);
  let totalReplacements = 0;

  for (const file of codeFiles) {
    if (file.includes("node_modules") || file.includes(".next") || file.includes(".git") || file.includes("scripts")) {
      continue;
    }

    let content = fs.readFileSync(file, "utf8");
    let changed = false;

    // Match image paths referenced in code (e.g. /images/...png or /oneimpact-contact/...jpeg)
    const regex = /(['"`])(\/(?:images|icons|LOGO|oneimpact-contact)\/[^'"`\r\n]*?\.(png|jpg|jpeg))(['"`])/gi;

    content = content.replace(regex, (match, p1, imgPath, ext, p4) => {
      const publicPath = path.join(PUBLIC_DIR, imgPath.slice(1));
      const webpPublicPath = publicPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

      if (fs.existsSync(webpPublicPath)) {
        const newPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
        changed = true;
        totalReplacements += 1;
        return `${p1}${newPath}${p4}`;
      }
      return match;
    });

    if (changed) {
      fs.writeFileSync(file, content, "utf8");
      console.log(`  ✓ Updated references in: ${path.relative(ROOT_DIR, file)}`);
    }
  }

  console.log(`✅ Code references updated! Total replacements made: ${totalReplacements}`);
}

async function main() {
  console.log("=================================================");
  console.log("⚡ One Impact Image Optimization & Reducer Engine");
  console.log("=================================================");
  console.log(`Targets: WebP=${generateWebP ? "YES" : "NO"} | AVIF=${generateAvif ? "YES" : "NO"} | Force=${force}`);
  console.log(`Directory: ${PUBLIC_DIR}\n`);

  const images = findFilesRecursive(PUBLIC_DIR, IMAGE_EXTS);
  console.log(`Found ${images.length} source images (PNG, JPG, JPEG) to inspect.\n`);

  const stats = {
    totalImagesProcessed: 0,
    totalOriginalBytes: 0,
    totalWebpBytes: 0,
    totalAvifBytes: 0,
    webpConverted: 0,
    webpSkipped: 0,
    avifConverted: 0,
    avifSkipped: 0,
  };

  for (const img of images) {
    await optimizeImage(img, stats);
  }

  console.log("\n=================================================");
  console.log("📊 OPTIMIZATION SUMMARY");
  console.log("=================================================");
  console.log(`Total Source Images: ${stats.totalImagesProcessed}`);
  console.log(`Original Total Size: ${(stats.totalOriginalBytes / (1024 * 1024)).toFixed(2)} MB`);

  if (generateWebP) {
    const origMB = stats.totalOriginalBytes / (1024 * 1024);
    const webpMB = stats.totalWebpBytes / (1024 * 1024);
    const savedMB = origMB - webpMB;
    const pct = ((savedMB / origMB) * 100).toFixed(1);
    console.log(
      `WebP Output:       ${webpMB.toFixed(2)} MB (Converted: ${stats.webpConverted}, Existed: ${stats.webpSkipped}) → Saved ${savedMB.toFixed(2)} MB (${pct}%)`
    );
  }

  if (generateAvif) {
    const origMB = stats.totalOriginalBytes / (1024 * 1024);
    const avifMB = stats.totalAvifBytes / (1024 * 1024);
    const savedMB = origMB - avifMB;
    const pct = ((savedMB / origMB) * 100).toFixed(1);
    console.log(
      `AVIF Output:       ${avifMB.toFixed(2)} MB (Converted: ${stats.avifConverted}, Existed: ${stats.avifSkipped}) → Saved ${savedMB.toFixed(2)} MB (${pct}%)`
    );
  }

  if (updateCode) {
    updateCodeReferences();
  }

  console.log("=================================================\n");
}

main().catch((err) => {
  console.error("Optimization failed:", err);
  process.exit(1);
});
