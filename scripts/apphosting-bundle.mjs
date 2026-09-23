// Generates the Firebase App Hosting output bundle for this TanStack Start app.
// Runs automatically after every build via the `postbuild` npm script, so both
// local builds and App Hosting cloud builds produce `.apphosting/bundle.yaml`.
// That file tells App Hosting how to start the production Node server.
import { mkdirSync, writeFileSync } from "node:fs";

const bundle = `version: v1
runConfig:
  runCommand: node .output/server/index.mjs
outputFiles:
  serverApp:
    include:
      - .output
      - dist
metadata:
  adapterPackageName: sp-securities-apphosting
  adapterVersion: 1.0.0
  framework: tanstack-start
  frameworkVersion: 1.168.32
`;

mkdirSync(".apphosting", { recursive: true });
writeFileSync(".apphosting/bundle.yaml", bundle);
console.log("Wrote .apphosting/bundle.yaml");
