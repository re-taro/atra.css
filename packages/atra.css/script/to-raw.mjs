import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const tmpPath = join(process.cwd(), './tmp');
const distPath = join(process.cwd(), './dist');
const css = readFileSync(join(distPath, 'atra.css'), 'utf8');
const ts = `const cssString = \`${css}\`;
export default cssString;`;

writeFileSync(join(tmpPath, 'raw.ts'), ts);
