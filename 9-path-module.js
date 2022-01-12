const path = require("path");
const filePath = path.join("/content", "subfolder", "text.txt");
const base = path.basename(filePath);
const absolute = path.resolve(__dirname, filePath);

console.log(path.sep);
console.log(filePath);
console.log(base);
console.log(absolute);
