const os  = require('os');


// info about current user
const user = os.userInfo();
// console.log(user)


// method returns the system uptime in seconds
const systemUptime = os.uptime();
// console.log(`the system uptime is ${systemUptime}`);


// some more method for os
const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

// console.log(currentOs)
