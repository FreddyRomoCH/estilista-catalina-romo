import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import vercel from "@astrojs/vercel/server";

export default defineConfig({
  output: "server",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
