const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imgDir = path.join(__dirname, "..", "public", "images");

const files = [
  {
    src: "V2 SERVICE PAGE_branding.png",
    dstWebp: "service-branding.webp",
    dstV2: "service-v2-branding.webp"
  },
  {
    src: "V2 SERVICE PAGE_website development.png",
    dstWebp: "service-website-development.webp",
    dstV2: "service-v2-website-development.webp"
  },
  {
    src: "V2 SERVICE PAGE_SEO.png",
    dstWebp: "service-seo.webp",
    dstV2: "service-v2-seo.webp"
  },
  {
    src: "V2 SERVICE PAGE_content & creative.png",
    dstWebp: "service-content-creative.webp",
    dstV2: "service-v2-content-creative.webp"
  },
  {
    src: "V2 SERVICE PAGE_Influencer marketing.png",
    dstWebp: "service-influencer-marketing.webp",
    dstV2: "service-v2-influencer-marketing.webp"
  },
  {
    src: "V2 SERVICE PAGE_UGC.png",
    dstWebp: "service-ugc.webp",
    dstV2: "service-v2-ugc.webp"
  },
  {
    src: "V2 SERVICE PAGE_social media.png",
    dstWebp: "service-social-media.webp",
    dstV2: "service-v2-social-media.webp"
  }
];

async function convert() {
  console.log("Converting V2 service images to WebP...");
  for (const item of files) {
    const srcPath = path.join(imgDir, item.src);
    if (!fs.existsSync(srcPath)) {
      console.warn(`File not found: ${item.src}`);
      continue;
    }

    const srcStat = fs.statSync(srcPath);
    const dstPath = path.join(imgDir, item.dstWebp);
    const dstV2Path = path.join(imgDir, item.dstV2);

    // Convert with sharp: resize to max width 1120 (2x card width for retina)
    const pipeline = sharp(srcPath)
      .resize({ width: 1120, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 });

    const buffer = await pipeline.toBuffer();

    fs.writeFileSync(dstPath, buffer);
    fs.writeFileSync(dstV2Path, buffer);

    const newSize = buffer.length;
    console.log(
      `✓ ${item.src} (${(srcStat.size / 1024).toFixed(0)}KB) -> ${item.dstWebp} (${(newSize / 1024).toFixed(0)}KB) [${((1 - newSize / srcStat.size) * 100).toFixed(1)}% saved]`
    );
  }
  console.log("Done converting V2 service images!");
}

convert().catch(console.error);
