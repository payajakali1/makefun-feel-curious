// "The Twelfth Boat" — a short text written to make the reader curious.
//
// The program writes one text to /output/entry.txt. The text is a small,
// calm mystery: a harbour keeper counts eleven boats out every morning
// and twelve back every evening. The twelfth boat has never been seen to
// leave, and nothing explains where it comes from. The keeper has stopped
// asking — he leaves her a lamp, and a cup of tea for whoever sails her.
// And every morning, the cup is empty: something answers him.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCES: string[] = [
  "Every morning the keeper counts the boats out of the harbour: eleven.",
  "Every evening: twelve.",
  "No one has seen her leave.",
  "He no longer asks where she comes from.",
  "He leaves her a lamp and a cup of tea, in case whoever sails her is cold.",
  "In the morning, the cup is always empty.",
];

function main(): void {
  const text = SENTENCES.join(" ");
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
    throw new Error(`entry text must be 1..280 code points, got ${codePoints}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
