import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const required = ["capacitor.config.json", "assets/app-store-icon-1024.png", "assets/icon-only.png", "assets/splash.png", "PRIVACY.md", "APP_STORE_METADATA.md", "IOS_RELEASE.md", "www/index.html"];
for (const file of required) await access(resolve(root, file));

const config = JSON.parse(await readFile(resolve(root, "capacitor.config.json"), "utf8"));
if (config.appId !== "com.daylight.family") throw new Error("Unexpected iOS bundle identifier");
if (config.appName !== "Daylight Arc") throw new Error("Unexpected iOS display name");

const web = await readFile(resolve(root, "www/index.html"), "utf8");
if (/DeMiguel|Kacey|Kaelyn|Kenzie/i.test(web)) throw new Error("Production bundle contains private family identity data");
console.log("Daylight App Store readiness checks passed.");
