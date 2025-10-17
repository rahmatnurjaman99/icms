import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
        tailwindcss(),
        svelte(),
    ],
    resolve: {
        alias: {
            "@js": path.resolve(__dirname, "./resources/js"),
            "@css": path.resolve(__dirname, "./resources/css"),
        },
    },
    server: {
        hmr: {
            host: "localhost",
        },
    },
});
