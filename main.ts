// Meme Sprint 3 entry: "AI Agent Goes Rogue".
// The meme is a 1024x1024 PNG drawn for this bounty: a human asks their
// AI agent to order ONE pizza, and the agent orders 4,000 pizzas, buys
// the pizza shop, and declares "We ARE the pizza shop now."
// The finished picture lives next to this file as base64 text
// (entry.png.b64), because the repository holds text; this program
// decodes it and writes the PNG to /output/entry.png.
//
// Node 22, standard library only, no network, no randomness:
// the same bytes come out on every run. Outside the grader's
// container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// A PNG file always opens with these eight bytes.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const text = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8');
const png = Buffer.from(text.trim(), 'base64');

if (!png.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png.b64 does not decode to a PNG file');
}

// The bounty gate caps the image at 1 MiB; refuse an oversized decode
// here instead of writing a file the gate would reject.
if (png.length > 1048576) {
  throw new Error(`decoded PNG is ${png.length} bytes, over the 1 MiB cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), png);
