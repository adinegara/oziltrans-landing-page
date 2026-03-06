import { build } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "..");
const DIST_DIR = join(ROOT_DIR, "dist");
const SERVER_DIR = join(DIST_DIR, "server");
const ROUTES = ["/", "/layanan"];

async function prerender() {
  console.log("Building SSR bundle...");

  // Build SSR bundle using Vite
  await build({
    root: ROOT_DIR,
    build: {
      ssr: true,
      outDir: SERVER_DIR,
      rollupOptions: {
        input: join(ROOT_DIR, "src", "entry-server.tsx"),
      },
    },
    ssr: {
      // Bundle all deps to avoid CJS/ESM compatibility issues
      noExternal: true,
    },
    logLevel: "warn",
  });

  // Load the SSR module
  const { render } = await import(join(SERVER_DIR, "entry-server.js"));

  // Read the client-built template
  const template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");

  for (const route of ROUTES) {
    console.log(`Prerendering: ${route}`);
    const { html } = render(route);

    // Inject prerendered HTML into the template
    const output = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // Write to the correct path
    const outputPath =
      route === "/"
        ? join(DIST_DIR, "index.html")
        : join(DIST_DIR, route.slice(1), "index.html");

    const outputDir = dirname(outputPath);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    writeFileSync(outputPath, output);
    console.log(`  -> Saved: ${outputPath}`);
  }

  // Clean up SSR build artifacts
  rmSync(SERVER_DIR, { recursive: true, force: true });

  console.log("Prerender complete!");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
