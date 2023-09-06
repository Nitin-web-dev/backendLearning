const path = require('path');
 
// path seperote
//  console.log(path.sep) //   print( / )

// joing method 
const filePath = path.join('./content','text.txt');
// console.log(filePath)

// base name method or file name
const base = path.basename(filePath);
// console.log(base)

// get full or absulte path 
const absPath = path.resolve(__dirname, filePath);
// console.log(absPath);

