const [input, ...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = rows.map((e) => e.split(""));

const map = new Map();

for (const word of arr) {
  let index = word.indexOf(".");
  const text = word.slice(index + 1, word.length).join("");
  if (!map.has(text)) {
    map.set(text, 1);
  } else {
    map.set(text, map.get(text) + 1);
  }
}

console.log(
  [...map]
    .sort()
    .map((e) => e.join(" "))
    .join("\n")
);
