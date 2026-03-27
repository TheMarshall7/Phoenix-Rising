/**
 * Batch-optimize images in /public: resize + compress JPEG; convert PNG→JPEG when no alpha.
 * Run: npm run optimize:images
 */

import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const MAX_EDGE = 1920;
const MAX_TESTIMONIAL_EDGE = 1400;
const JPEG_QUALITY = 84;
const JPEG_SCREENSHOT_QUALITY = 82;
const MIN_BYTES = 90_000;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

function isTestimonialPath(p) {
  return p.includes(`${path.sep}Testimonials${path.sep}`);
}

function kb(n) {
  return `${(n / 1024).toFixed(0)}KB`;
}

async function processJpeg(filePath) {
  const buf = await fs.readFile(filePath);
  const orig = buf.length;
  const meta = await sharp(buf).metadata();
  if (orig < MIN_BYTES && (meta.width ?? 0) <= MAX_EDGE && (meta.height ?? 0) <= MAX_EDGE) {
    return;
  }

  let pipeline = sharp(buf).rotate();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (w > MAX_EDGE || h > MAX_EDGE) {
    pipeline = pipeline.resize(MAX_EDGE, MAX_EDGE, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const out = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
  if (out.length <= orig * 1.02) {
    await fs.writeFile(filePath, out);
    console.log(`[jpeg] ${path.relative(PUBLIC, filePath)}  ${kb(orig)} → ${kb(out.length)}`);
  }
}

async function processPng(filePath) {
  const buf = await fs.readFile(filePath);
  const orig = buf.length;
  const meta = await sharp(buf).metadata();
  const hasAlpha = meta.hasAlpha === true;
  const rel = path.relative(PUBLIC, filePath);
  const testimonial = isTestimonialPath(filePath);
  const maxEdge = testimonial ? MAX_TESTIMONIAL_EDGE : MAX_EDGE;

  let pipeline = sharp(buf).rotate();

  if ((meta.width && meta.width > maxEdge) || (meta.height && meta.height > maxEdge)) {
    pipeline = pipeline.resize(maxEdge, maxEdge, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (!hasAlpha && testimonial) {
    const jpgPath = filePath.replace(/\.png$/i, ".jpg");
    const out = await pipeline
      .jpeg({ quality: JPEG_SCREENSHOT_QUALITY, mozjpeg: true })
      .toBuffer();
    await fs.writeFile(jpgPath, out);
    await fs.unlink(filePath);
    console.log(`[png→jpg] ${rel}  ${kb(orig)} → ${kb(out.length)}`);
    return;
  }

  if (orig < MIN_BYTES && !testimonial && (meta.width ?? 0) <= maxEdge && (meta.height ?? 0) <= maxEdge) {
    return;
  }

  if (hasAlpha) {
    const out = await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer();
    if (out.length < orig) {
      await fs.writeFile(filePath, out);
      console.log(`[png] ${rel}  ${kb(orig)} → ${kb(out.length)}`);
    }
  } else {
    const out = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    const jpgPath = filePath.replace(/\.png$/i, ".jpg");
    await fs.writeFile(jpgPath, out);
    await fs.unlink(filePath);
    console.log(`[png→jpg] ${rel}  ${kb(orig)} → ${kb(out.length)}`);
  }
}

async function main() {
  const files = await walk(PUBLIC);
  const images = files.filter((f) => /\.(jpe?g|png)$/i.test(f));
  console.log(`Optimizing ${images.length} images under public/…\n`);
  for (const file of images) {
    try {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".jpg" || ext === ".jpeg") await processJpeg(file);
      else if (ext === ".png") await processPng(file);
    } catch (e) {
      console.error(`Skip ${file}:`, e.message);
    }
  }
  console.log("\nDone.");
}

main();
