import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
    base: "/VidreBanyCPanel/",
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    build: {
        outDir: "build",
    },
    define: {
        "process.env": {},
    }
});