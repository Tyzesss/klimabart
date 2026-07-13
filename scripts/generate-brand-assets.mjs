import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");

const logoSrc = path.join(
  root,
  "..",
  ".cursor",
  "projects",
  "c-Users-Tymek-Documents-WEBSITES-klimabart",
  "assets",
  "c__Users_Tymek_AppData_Roaming_Cursor_User_workspaceStorage_fd40e37fa2fee86c3cb430424b3377e1_images_LOGO_KLIMA_BART-removebg-preview-ce769302-75eb-4314-b0bd-d2e4045c9053.png",
);

// Fallback: copy from workspace assets path if relative fails
const altLogoSrc =
  "C:/Users/Tymek/.cursor/projects/c-Users-Tymek-Documents-WEBSITES-klimabart/assets/c__Users_Tymek_AppData_Roaming_Cursor_User_workspaceStorage_fd40e37fa2fee86c3cb430424b3377e1_images_LOGO_KLIMA_BART-removebg-preview-ce769302-75eb-4314-b0bd-d2e4045c9053.png";

const source = await sharp(logoSrc).metadata().catch(() => sharp(altLogoSrc).metadata());
const input = source ? logoSrc : altLogoSrc;

await sharp(await sharp(logoSrc).metadata().then(() => logoSrc).catch(() => altLogoSrc))
  .resize({ width: 320, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, "logo.png"));

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0c0c0c"/>
  <clipPath id="pill"><rect x="6" y="14" width="52" height="36" rx="18"/></clipPath>
  <g clip-path="url(#pill)">
    <rect x="6" y="14" width="52" height="18" fill="#D63026"/>
    <rect x="6" y="32" width="52" height="18" fill="#0091D5"/>
    <path d="M16 23h10l-2.5-2.5M26 23l-2.5 2.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
    <path d="M48 41H38l2.5-2.5M38 41l2.5 2.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  </g>
</svg>`;

const svgBuffer = Buffer.from(faviconSvg);
await sharp(svgBuffer).resize(64, 64).png().toFile(path.join(publicDir, "favicon.png"));

console.log("Generated public/logo.png and public/favicon.png");
