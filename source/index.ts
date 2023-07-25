import { getPackageManagerName as getPackageManagerNameByLockfile } from "which-pm-lockfile";
import { rootPkgJSON } from "root-pkg-json";
import { readJSON } from "read-json-safe";

export type PackageMangerName = typeof packageManagerNames[number];

const packageManagerNames = ["npm", "yarn", "pnpm", "bun"] as const;

function firstStartsWith<T extends string>(string: string, prefixes: readonly T[]) {
  return prefixes.find((prefix) => string.startsWith(prefix));
}

export async function getPackageManagerName() {
  // Try to detect based on lockfile
  const packageMangerName = getPackageManagerNameByLockfile();
  if(packageMangerName) {
    return packageMangerName;
  }
  // Try to detect based on package.json packageManager field
  const packageJSONPath = await rootPkgJSON();
  if(packageJSONPath) {
    const packageJSON = await readJSON(packageJSONPath);
    if(packageJSON && typeof packageJSON === "object" && "packageManager" in packageJSON) {
      const packageManager = packageJSON.packageManager;
      if(typeof packageManager === "string") {
        return firstStartsWith(packageManager, packageManagerNames);
      }
    }
  }
  return undefined;
}

async function is(name: PackageMangerName) {
  const packageManagerName = await getPackageManagerName();
  return packageManagerName === name;
}

export async function isNPM() {
  return is("npm");
}

export async function isYarn() {
  return is("yarn");
}

export async function isPNPM() {
  return is("pnpm");
}

export async function isBun() {
  return is("bun");
}
