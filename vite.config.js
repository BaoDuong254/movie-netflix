/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@lib": path.resolve(__dirname, "src/lib"),
            "@hooks": path.resolve(__dirname, "src/hooks"),
            "@context": path.resolve(__dirname, "src/context"),
        },
    },
    // server: {
    //     allowedHosts: [
    //         "3a21-2001-ee0-519a-62e0-5d13-89a-e3ed-8db1.ngrok-free.app",
    //     ],
    // },
});
