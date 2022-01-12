// GLOBALS - NO WINDOW

// ___dirname   - path to current directory
// ___filename  - filename
// require      - function to use modules (CommonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
console.log(__filename);
