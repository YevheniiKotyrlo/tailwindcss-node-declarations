import { compile } from '@tailwindcss/node';

export const compiler = await compile('@import "tailwindcss";', {
  base: process.cwd(),
  onDependency: () => {},
});
console.log(compiler.build(['flex']).includes('display: flex'));
