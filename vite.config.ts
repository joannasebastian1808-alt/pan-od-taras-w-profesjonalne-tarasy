import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/pan-od-tarasow/",
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: false,
    },
    pages: [
      {
        path: "/",
        prerender: {
          enabled: true,
          outputPath: "/index.html",
        },
      },
    ],
    server: { entry: "server" },
  },
});
