// Builds a static, prerendered copy of the site and publishes it to the `gh-pages` branch,
// which GitHub Pages serves at https://<owner>.github.io/<repo>/.
// Usage: npm run deploy:pages
import { execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const run = (cmd, opts = {}) => execSync(cmd, { stdio: "inherit", ...opts });
const out = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const remote = out("git remote get-url origin");
const repo = path.basename(remote).replace(/\.git$/, "");
const base = `/${repo}/`;

console.log(`Building for GitHub Pages at base ${base}`);
fs.rmSync("dist", { recursive: true, force: true });
run("npx vite build", { env: { ...process.env, PAGES_BASE: base, MSYS_NO_PATHCONV: "1" } });

const site = path.resolve("dist/client");
if (!fs.existsSync(path.join(site, "index.html")))
  throw new Error("Prerender produced no index.html");
fs.writeFileSync(path.join(site, ".nojekyll"), "");
fs.copyFileSync(path.join(site, "index.html"), path.join(site, "404.html"));

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "gh-pages-"));
fs.cpSync(site, tmp, { recursive: true });
const sha = out("git rev-parse --short HEAD");
const git = (cmd) => run(`git ${cmd}`, { cwd: tmp });
git("init -q -b gh-pages");
git("add -A");
git(`commit -q -m "Deploy ${sha} to GitHub Pages"`);
git(`push -q -f "${remote}" gh-pages`);
fs.rmSync(tmp, { recursive: true, force: true });

const owner = remote.match(/[:/]([^/]+)\/[^/]+$/)?.[1];
console.log(`\nDeployed. Live in ~1 minute at https://${owner?.toLowerCase()}.github.io${base}`);
