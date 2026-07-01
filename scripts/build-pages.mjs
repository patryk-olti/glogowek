import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")?.[1] ||
  process.env.REPO_NAME ||
  "glogowek";

const rootOut = ".out-root";
const subOut = ".out-sub";
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

runBuild("");
move("out", rootOut);

runBuild(`/${repoName}`);
move("out", subOut);

rm(finalOut);
ensureDir(finalOut);

// Root (custom domain) build at /
copy(rootOut, finalOut);

// Project Pages build at /<repoName>/
const subFolder = path.join(subOut, repoName);
const finalSubFolder = path.join(finalOut, repoName);
ensureDir(finalSubFolder);

if (fs.existsSync(subFolder)) {
  copy(subFolder, finalSubFolder);
} else {
  // Fallback: if Next didn't emit a nested folder, copy everything.
  copy(subOut, finalSubFolder);
}

writeNoJekyll(finalOut);

