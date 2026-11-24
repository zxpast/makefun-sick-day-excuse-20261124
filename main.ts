// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes one line (one sentence, under 200 characters) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I tried to fix the tap myself at 2 a.m. and now my bathroom is a small lake with its own weather system, so I'm off until the tide goes out.";

// Gate parity: one line, one sentence, 1–200 characters, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry must be 1-200 characters on one line, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
