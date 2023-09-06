const {writeFileSync} = require('fs')


for(let i = 0; i < 1000; i++){
    writeFileSync('./bigText.txt', `this is line ${i}; \n`, {flag: 'a'});
}