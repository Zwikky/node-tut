const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("data", (name, id) => {
  console.log(`data recieved __name: ${name} || with __id: ${id}`);
});
customEmitter.on("data", () => {
  console.log(`again data squizzed`);
});

customEmitter.emit("data", "Lucky", 101);
