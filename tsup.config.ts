import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // Output both ESM and CJS entry: ['src/**/*.ts'], // Entry points
  minify: true,
  clean: true,
  dts: true
});
