import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.resolve(__dirname, "..", "docs");
const indexPath = path.join(outDir, "index.html");
const notFoundPath = path.join(outDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("Cannot create 404.html because docs/index.html is missing. Run the build first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("Created docs/404.html for SPA routing fallback.");
