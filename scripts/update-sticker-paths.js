const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "components", "footer", "StickerPlayground.tsx");
let content = fs.readFileSync(file, "utf8");
const updated = content.replace(/\/images\/stickers\/([^"]+)\.png/g, "/images/stickers/$1.webp");
fs.writeFileSync(file, updated, "utf8");
console.log("Updated StickerPlayground.tsx sticker extensions to .webp");
