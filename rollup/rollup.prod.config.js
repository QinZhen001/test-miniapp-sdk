import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';


const config = () => {
  return {
    input: 'src/index.ts',
    output: {
      format: "umd",
      file: 'dist/index.js',
      name: "TestMiniappSdk",
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      // terser(),
      json(),
      // dotenv(),
      typescript(),
      resolve({
        extensions: ['.js', 'cjs', '.mjs', '.ts'],
        mainFields: ['browser', 'module', 'main', 'jsnext:main'],
        preferBuiltins: false,
        browser: true,
      }),
      commonjs(),
    ],
    external: [
      "agora-rtc-sdk-ng",
      "agora-rtm",
      "@agora-js/report"
    ]
  }
}





export default config
