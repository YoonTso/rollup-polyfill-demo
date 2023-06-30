import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/umd.js",
            format: "umd",
        },
        {
            file: "dist/iife.js",
            format: "iife",
        },
    ],
    plugins: [nodeResolve(), commonjs(), babel({ babelHelpers: "bundled" })],
};
