import { defineNitroConfig } from "nitropack/config";
import preactIslandPlugins from "@barelyhuman/preact-island-plugins/rollup";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import autoprefixer from "autoprefixer";
import postcss from "postcss";

export default defineNitroConfig({
  imports: {
    imports: [
      {
        name: "renderToString",
        as: "renderComponent",
        from: "preact-render-to-string",
      },
    ],
  },
  publicAssets: [
    {
      dir: "public",
      baseURL: "/public",
    },
    {
      dir: ".islands",
      baseURL: "/islands",
    },
  ],
  esbuild: {
    options: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      loaders: {
        ".js": "jsx",
      },
    },
  },
  rollupConfig: {
    plugins: [
      scss({
        output: "./public/bundle.css",
        processor: () =>
          postcss([
            autoprefixer({
              overrideBrowserslist: ">0.2%, not dead, not op_mini all",
            }),
          ]),
      }),
      preactIslandPlugins({
        rootDir: ".",
        atomic: true,
        hash: false,
        baseURL: "/islands",
        client: {
          output: ".islands",
        },
      }),
      babel({
        babelHelpers: "bundled",
        plugins: [
          [
            "@babel/plugin-transform-react-jsx",
            {
              runtime: "automatic",
              importSource: "preact",
            },
          ],
        ],
      }),
    ],
  },
});
