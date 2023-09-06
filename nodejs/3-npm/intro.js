// lodash is a external module we install from npm

const _ = require('lodash');

const arr = [1,[2,[3,[4]]]];
const res = _.flattenDeep(arr);
console.log(res) // [1,2,3,4];