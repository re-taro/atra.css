import { resolve } from 'node:path';
import { execSync } from 'node:child_process';
import { build } from 'esbuild';

/** @type {import('esbuild').BuildOptions} */
const options = {
  bundle: true,
  entryPoints: [resolve(process.cwd(), './tmp/raw.ts')],
  minify: true,
  outfile: './dist/raw.js',
  platform: 'browser',
  plugins: [
    {
      name: 'TypeScriptDeclarationsPlugin',
      setup(build) {
        build.onEnd((result) => {
          if (result.errors.length > 0) return;
          execSync('tsc -p tsconfig.build.json --emitDeclarationOnly');
        });
      },
    },
  ],
};

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
