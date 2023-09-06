const {readFile} = require('fs')

const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf-8', (err,data) => {
            if(err){
                reject(err)
             } else {
                resolve(data)
            }})

    })
}
// getText('../content/text.txt').then((data) => console.log(data)).catch(err => console.log(err))


const start = async () => {
    try{
        
        const first = await getText('../content/text.txt');
        console.log(first)
    }catch (err) {
        console.log(err)
    }
}

start()


