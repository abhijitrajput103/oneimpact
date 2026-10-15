const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "images");
const map = {
  "Service page_branding.webp": "service-branding.webp",
  "Service page_website development.webp": "service-website-development.webp",
  "Service page_SEO.webp": "service-seo.webp",
  "Service page_content & creative.webp": "service-content-creative.webp",
  "Service page_Influencer marketing.webp": "service-influencer-marketing.webp",
  "Service page_UGC.webp": "service-ugc.webp"
};

for (const [src, dst] of Object.entries(map)) {
  const srcPath = path.join(dir, src);
  const dstPath = path.join(dir, dst);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`Copied ${src} -> ${dst}`);
  }
}
