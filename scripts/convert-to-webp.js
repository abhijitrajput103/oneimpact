/**
 * Convert all PNG/JPG images to WebP format for dramatic file size reduction.
 * Keeps originals and creates .webp versions alongside them.
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

// Directories to scan for images
const SCAN_DIRS = [
  path.join(PUBLIC_DIR, "images"),
  path.join(PUBLIC_DIR, "images", "reels"),
  path.join(PUBLIC_DIR, "images", "stickers"),
  path.join(PUBLIC_DIR, "LOGO"),
  path.join(PUBLIC_DIR, "LOGO", "transparent"),
];

const IMAGE_EXTS = [".png", ".jpg", ".jpeg"];

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTS.includes(ext)) return;

  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

  // Skip if webp already exists and is newer
  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(filePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs > srcStat.mtimeMs) {
      console.log(`  SKIP (exists): ${path.basename(webpPath)}`);
      return;
    }
  }

  try {
    const srcSize = fs.statSync(filePath).size;

    // Determine quality based on image purpose
    const basename = path.basename(filePath).toLowerCase();
    let quality = 80;
    let resizeOpts = {};

    // Hero mobile image — resize to max 1080px width for phones
    if (basename.includes("mobile") || basename.includes("illustration")) {
      quality = 78;
      resizeOpts = { width: 1080, withoutEnlargement: true };
    }
    // Service page images — resize to max 800px for cards
    else if (basename.includes("service")) {
      quality = 75;
      resizeOpts = { width: 800, withoutEnlargement: true };
    }
    // Stickers — maximum 240px since they render at 24-120px
    else if (filePath.includes("stickers")) {
      quality = 80;
      resizeOpts = { width: 240, height: 240, fit: "inside", withoutEnlargement: true };
    }
    // Logos — keep crisp with higher quality, smaller resize
    else if (filePath.includes("LOGO") || filePath.includes("transparent")) {
      quality = 85;
      resizeOpts = { height: 120, withoutEnlargement: true };
    }
    // Reel thumbnails
    else if (filePath.includes("reels")) {
      quality = 78;
      resizeOpts = { width: 480, withoutEnlargement: true };
    }

    let pipeline = sharp(filePath);
    if (resizeOpts.width || resizeOpts.height) {
      pipeline = pipeline.resize(resizeOpts);
    }

    await pipeline.webp({ quality, effort: 6 }).toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / srcSize) * 100).toFixed(1);
    console.log(
      `  ✓ ${path.basename(filePath)} → ${path.basename(webpPath)}  ` +
        `${(srcSize / 1024).toFixed(0)}KB → ${(webpSize / 1024).toFixed(0)}KB  (${savings}% smaller)`
    );
  } catch (err) {
    console.error(`  ✗ FAILED: ${path.basename(filePath)} — ${err.message}`);
  }
}

async function main() {
  console.log("🔄 Converting images to WebP...\n");

  for (const dir of SCAN_DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir}`);
      continue;
    }

    console.log(`📂 ${path.relative(PUBLIC_DIR, dir)}/`);
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        await convertToWebP(filePath);
      }
    }
    console.log("");
  }

  console.log("✅ Done! All images converted to WebP.\n");
}

main().catch(console.error);
