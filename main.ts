// Say What Actually Broke — entry #1
// One concrete failure, told straight: a deploy that broke the very thing
// it was supposed to fix. The twist lands on the rollback, and the reader
// knows exactly what to do next: wait a minute and try again.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We shipped a deploy that broke the thing it was supposed to fix. We've rolled it back — try again in a minute.";

// The gate requires 1–200 characters, a single line, not only whitespace.
if ([...line].length < 1 || [...line].length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${[...line].length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
