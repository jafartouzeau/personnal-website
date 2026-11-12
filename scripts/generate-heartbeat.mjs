// Génère public/heartbeat.json : nombre de commits par jour,
// du premier au dernier commit, avec 10 jours à 0 de marge de chaque côté.
// Usage : node scripts/generate-heartbeat.mjs [--pad 10] [--out public/heartbeat.json]
import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";

const arg = (flag, fallback) => {
  const i = process.argv.indexOf(flag);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const PAD = Number(arg("--pad", 10));
const OUT = arg("--out", "public/heartbeat.json");
const name = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? basename(resolve("."));

// Les builds CI font souvent un clone superficiel : on récupère tout l'historique
try {
  if (execSync("git rev-parse --is-shallow-repository", { encoding: "utf8" }).trim() === "true") {
    execSync("git fetch --unshallow", { stdio: "ignore" });
  }
} catch {
  console.warn("heartbeat: impossible de récupérer l'historique complet");
}

const log = execSync("git log --format=%ad --date=short", {
  encoding: "utf8",
  maxBuffer: 1024 * 1024 * 100,
});

const counts = {};
for (const d of log.split("\n").filter(Boolean)) counts[d] = (counts[d] ?? 0) + 1;

const dates = Object.keys(counts).sort();
if (dates.length === 0) {
  console.warn("heartbeat: aucun commit trouvé");
  process.exit(0);
}

const DAY = 86400000;
const toMs = (iso) => Date.parse(`${iso}T00:00:00Z`);
const start = toMs(dates[0]) - PAD * DAY; // PAD jours à 0 avant le premier commit
const end = toMs(dates[dates.length - 1]) + PAD * DAY; // PAD jours à 0 après le dernier

const days = [];
for (let t = start; t <= end; t += DAY) {
  const iso = new Date(t).toISOString().slice(0, 10);
  days.push([iso, counts[iso] ?? 0]);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify({ generated: new Date().toISOString(), projects: [{ name, days }] }));
console.log(
  `heartbeat: ${dates.length} jours actifs, ${days.length} jours au total (${dates[0]} -> ${dates[dates.length - 1]}, marge ${PAD}) -> ${OUT}`
);
