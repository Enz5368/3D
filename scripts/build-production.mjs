import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { transform } from "esbuild";

const projectRoot = resolve(import.meta.dirname, "..");
const sourceRoot = join(projectRoot, "final");
const outputRoot = join(projectRoot, "deploy-dist");

const assets = [
  "icon-business-card.svg",
  "icon-nas.svg",
  "icon-pc-build.svg",
  "icon-pc-repair.svg",
  "icon-phone.svg",
  "icon-setup.svg",
  "icon-smart-home.svg",
  "icon-software.svg",
  "icon-web.svg",
  "cart-basket-ai.png",
  "intro-studio-cold.png",
  "logo-avocat-meite.svg",
  "logo-maxsono.svg",
  "logo-sts.png",
  "service-business-card-hd.png",
  "service-detail.js",
  "service-education-hd.png",
  "service-lawyer-hd.png",
  "service-maxsono-hd.png",
  "service-nas-hd.png",
  "service-pc-build-hd.png",
  "service-phone-hd.png",
  "service-repair-hd.png",
  "service-setup-hd.png",
  "service-smart-home-hd.png",
  "service-software-hd.png",
  "service-web-hd.png",
];

async function copy(relativePath) {
  const source = join(sourceRoot, relativePath);
  const destination = join(outputRoot, relativePath);
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true });
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(join(outputRoot, "assets"), { recursive: true });

let html = await readFile(join(sourceRoot, "index.html"), "utf8");
html = html
  .replace(
    /\/\* ============================== Loader ============================== \*\/[\s\S]*?(?=\/\* ============================== Header ============================== \*\/)/,
    "",
  )
  .replace(
    /\/\* ============================== Hero ============================== \*\/[\s\S]*?(?=\/\* ============================== Services ============================== \*\/)/,
    "",
  );

const jsxPattern =
  /<script type="text\/babel" data-type="module" data-presets="react">([\s\S]*?)<\/script>/;
const jsxMatch = html.match(jsxPattern);

if (!jsxMatch) {
  throw new Error("Le module React principal est introuvable dans final/index.html.");
}

const compiled = await transform(jsxMatch[1], {
  loader: "jsx",
  target: "es2022",
  format: "esm",
  minify: true,
  legalComments: "none",
});

html = html
  .replace(
    '<script src="https://unpkg.com/@babel/standalone@7.25.6/babel.min.js"></script>',
    "",
  )
  .replace(
    '<script src="https://unpkg.com/gsap@3.12.5/dist/gsap.min.js"></script>',
    "",
  )
  .replace(
    '<script src="https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>',
    "",
  )
  .replace(jsxPattern, `<script type="module">${compiled.code}</script>`)
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/\n\s*\n/g, "\n");

await writeFile(join(outputRoot, "index.html"), html, "utf8");
await mkdir(join(outputRoot, ".well-known"), { recursive: true });
await writeFile(
  join(outputRoot, ".well-known", "security.txt"),
  [
    "Contact: mailto:orellanatech37@gmail.com",
    "Preferred-Languages: fr, en",
    "Canonical: https://orellanatech.monespaceprof.com/.well-known/security.txt",
    "Expires: 2027-07-23T23:59:59Z",
    "",
  ].join("\n"),
  "utf8",
);

const serviceCss = await readFile(join(sourceRoot, "style.css"), "utf8");
const minifiedCss = await transform(serviceCss, {
  loader: "css",
  minify: true,
  legalComments: "none",
});
await writeFile(join(outputRoot, "style.css"), minifiedCss.code, "utf8");

await copy("services");

for (const asset of assets) {
  if (asset === "service-detail.js") {
    const serviceScript = await readFile(
      join(sourceRoot, "assets", asset),
      "utf8",
    );
    const minifiedScript = await transform(serviceScript, {
      loader: "js",
      target: "es2022",
      minify: true,
      legalComments: "none",
    });
    await writeFile(
      join(outputRoot, "assets", asset),
      minifiedScript.code,
      "utf8",
    );
  } else {
    await copy(join("assets", asset));
  }
}

console.log(`Production préparée dans ${outputRoot}`);
