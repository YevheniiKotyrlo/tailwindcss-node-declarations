# @tailwindcss/node declarations reproducer

`@tailwindcss/node`'s `dist/index.d.ts` and `dist/index.d.mts` import `./ast`, `./candidate`, `./compile`, `./intellisense`, `./theme`, `./utilities` and `./variants`, which the package does not ship. This project imports `compile` from `@tailwindcss/node` built from `main` at 8cc0551 (`0.0.0-insiders.8cc0551`, the same files as 4.3.3) and type-checks it with `skipLibCheck: false`.

```sh
npm install
npm run check   # 7 x TS2307 in node_modules/@tailwindcss/node/dist/index.d.ts
npm start       # the same import runs and prints true
```
