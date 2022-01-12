const os = require("os");

// info about current user
const user = os.userInfo();

console.log(`Logged in user is: ${user.username}`);

// method returns the system uptime in minutes
const upTime = os.uptime();

console.log(`The Sytem Uptime is: ${upTime / 60.0} minutes`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem() / 1024 / 1024,
  freeMemomry: os.freemem() / 1024 / 1024,
  CPUs: os.cpus,
};

console.log(currentOS);
