const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imgDir = path.join(__dirname, "..", "public", "images");
const servicesDir = path.join(imgDir, "services");

const mappings = [
  {
    src: "Branding.png",
    name: "branding",
    targets: ["service-branding.webp", "service-v2-branding.webp"]
  },
  {
    src: "Website Development.png",
    name: "website-development",
    targets: ["service-website-development.webp", "service-v2-website-development.webp"]
  },
  {
    src: "SEO.png",
    name: "seo",
    targets: ["service-seo.webp", "service-v2-seo.webp"]
  },
  {
    src: "Content & creative .png",
    name: "content-creative",
    targets: ["service-content-creative.webp", "service-v2-content-creative.webp"]
  },
  {
    src: "Influncer Marketing.png",
    name: "influencer-marketing",
    targets: ["service-influencer-marketing.webp", "service-v2-influencer-marketing.webp"]
  },
  {
    src: "UGC.png",
    name: "ugc",
    targets: ["service-ugc.webp", "service-v2-ugc.webp"]
  },
  {
    src: "Social Media.png",
    name: "social-media",
    targets: ["service-social-media.webp", "service-v2-social-media.webp"]
  }
];

const oldPngsToDelete = [
  "V2 SERVICE PAGE_branding.png",
  "V2 SERVICE PAGE_content & creative.png",
  "V2 SERVICE PAGE_Influencer marketing.png",
  "V2 SERVICE PAGE_SEO.png",
  "V2 SERVICE PAGE_social media.png",
  "V2 SERVICE PAGE_UGC.png",
  "V2 SERVICE PAGE_website development.png"
];

async function updateServices() {
  console.log("=== 1. Converting new service images from public/images/services ===");
  for (const item of mappings) {
    const srcPath = path.join(servicesDir, item.src);
    if (!fs.existsSync(srcPath)) {
      console.error(`Missing source image: ${srcPath}`);
      continue;
    }

    const srcStat = fs.statSync(srcPath);

    // Convert with sharp: resize to width 1400 (ultra-sharp for 2x retina display cards)
    const buffer = await sharp(srcPath)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toBuffer();

    for (const target of item.targets) {
      const targetPath = path.join(imgDir, target);
      fs.writeFileSync(targetPath, buffer);
      console.log(`✓ Updated ${target} (${(buffer.length / 1024).toFixed(0)}KB) from ${item.src} (${(srcStat.size / (1024 * 1024)).toFixed(2)}MB)`);
    }

    // Also write clean webp inside services folder
    const cleanWebp = path.join(servicesDir, `${item.name}.webp`);
    fs.writeFileSync(cleanWebp, buffer);
  }

  console.log("\n=== 2. Deleting old V2 SERVICE PAGE_*.png images ===");
  for (const oldFile of oldPngsToDelete) {
    const oldPath = path.join(imgDir, oldFile);
    if (fs.existsSync(oldPath)) {
      fs.unlinkSync(oldPath);
      console.log(`✓ Deleted old image: ${oldFile}`);
    } else {
      console.log(`- Not found / already deleted: ${oldFile}`);
    }
  }

  console.log("\n=== Done! All service images updated successfully ===");
}

updateServices().catch(console.error);
