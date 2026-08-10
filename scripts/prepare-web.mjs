import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "www");
const files = ["index.html", "app.js", "styles.css", "seed-data.js", "manifest.webmanifest", "sw.js"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of files) await cp(resolve(root, file), resolve(output, file));
await cp(resolve(root, "icons"), resolve(output, "icons"), { recursive: true });
console.log(`Prepared ${files.length} web files and icons in ${output}`);
