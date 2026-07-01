import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")?.[1] ||
  process.env.REPO_NAME ||
  "glogowek";

const finalOut = "out";

function rm(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
}

function ensureDir(targetPath) {
  fs.mkdirSync(targetPath, { recursive: true });
}

function move(src, dest) {
  rm(dest);
  try {
    fs.renameSync(src, dest);
  } catch (error) {
    // On Windows (e.g. OneDrive), rename can fail with EPERM even when copy works.
    ensureDir(dest);
    copy(src, dest);
    rm(src);
  }
}

function copy(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

function writeNoJekyll(targetPath) {
  fs.writeFileSync(path.join(targetPath, ".nojekyll"), "");
}

function runBuild(basePath) {
  rm("out");
  rm(".next");

  execSync("npm run build", {
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
  });
}

runBuild(`/${repoName}`);

writeNoJekyll(finalOut);

