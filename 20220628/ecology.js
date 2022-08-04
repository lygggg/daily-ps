const [...rows] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(rows);

let total = rows.length;
const map = new Map();
rows.sort();
for (let i = 0; i < rows.length; i++) {
  if (!map.has(rows[i])) {
    map.set(rows[i], 1);
  } else {
    map.set(rows[i], map.get(rows[i]) + 1);
  }
}
map.forEach((value, key) => map.set(key, ((value / total) * 100).toFixed(4)));

console.log([...map].join("\n"));
