// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    output: 'server',
    adapter: vercel({
        webAnalytics: {
          enabled: true, // set to false when using @vercel/analytics@1.4.0
        },
    }),
    integrations: [partytown(), react()],
});