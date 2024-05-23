import * as sharp from 'npm:sharp@0.33.4';
import { walkSync } from "https://deno.land/std@0.193.0/fs/mod.ts";

for (const file of walkSync('.',{
    maxDepth: 1,
    includeDirs: false,
    exts: [".png"]
  })) {
    console.log(file);
    sharp
  .default(file.name)
  .toFile(file.name.replace(".png", '.webp') , (err, info) => {
    console.log(err, info);
  });
}

/*
 * deno run --allow-read --allow-write --allow-ffi --allow-env test.ts
 */