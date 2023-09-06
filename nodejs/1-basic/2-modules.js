// modules
// common js - every file is module ( by default)
// modules - Encapsulate code ( only share minimum)

// access module
const names = require('./3-names.js');
const sayHi = require('./4-utils.js');
const data = require('./5-alternativeExport.js')

// destructuring names to variale
const {john, peter} = names;


// use module
sayHi('susan')
sayHi(john)
sayHi(peter)

// call alternative exports
console.log(data)
