const {readFile} = require('fs')

console.log('started a first task')

// check file path
readFile('../content/text.txt', 'utf-8', (err, result ) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('started next task')