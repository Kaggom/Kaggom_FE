import { crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, Plugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import manifest from './manifest.config';

const viteManifestHackIssue846: Plugin & { renderCrxManifest: (manifest: any, bundle: any) => void } = {
    name: 'manifestHackIssue846',
    renderCrxManifest(_manifest, bundle) {
        if (bundle['.vite/manifest.json']) {
            bundle['manifest.json'] = bundle['.vite/manifest.json'];
            bundle['manifest.json'].fileName = 'manifest.json';
            delete bundle['.vite/manifest.json'];
        } else {
            console.error('Failed to find .vite/manifest.json in the bundle.');
        }
    },
};

export default defineConfig({
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    plugins: [react(), viteManifestHackIssue846, crx({ manifest }), tsconfigPaths()],
    server: {
        watch: {
            usePolling: true,
        },
    },
});
