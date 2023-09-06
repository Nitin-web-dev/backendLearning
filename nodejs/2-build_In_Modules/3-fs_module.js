const { readFileSync, writeFileSync } = require("fs");

// path to change or edit file 
const filePath = './content/fsModuleTestFile';
// read file sync
const fileOne = readFileSync(`${filePath}/first.txt`,'utf-8');
// console.log(fileOne)
const secFile = readFileSync(`${filePath}/second.txt`,'utf-8');
// console.log(secFile)


// create a file
writeFileSync(`${filePath}/nCrteFile.txt`,`here is data \n${fileOne}\n${secFile}`);

const newCreatedFileRead = readFileSync(`${filePath}/nCrteFile.txt`,'utf-8');
// console.log(newCreatedFileRead);



const fs = require('fs');

// synchronous file method
// // create a file
//     fs.writeFileSync('./txt.txt',"hello to world");

// // read a file
//     let file = fs.readFileSync('./txt.txt', 'utf-8');
//     console.log(file);
//     console.log('______---------')

// // update a file
//     fs.appendFileSync('./txt.txt','\n this is another file');
//     let file2 = fs.readFileSync('./txt.txt', 'utf-8');
//     console.log(file2);
//     console.log('______---------')


// // delete a file

//     fs.writeFileSync('./txt2.txt',"another text to delete");
//     console.log('file created');
//     fs.unlinkSync('./txt2.txt');
//     console.log('file deltet');

// // rename a file

//     fs.renameSync('./txt.txt','./text.txt');
//     console.log('renamed')


// asynchronous

// create a file
// fs.writeFile('./txt.txt',"hello to world",() => {
//     console.log('created file');
// });
// console.log('______---------')

// // read a file
    // fs.readFile('./txt.txt', 'utf-8', (err, data) => {
    //     console.log(data);
    //     console.log('readed');
    // });
    // console.log('______---------');

// // update a file
    // fs.appendFile('./txt.txt','\n this is another file',(err,data) => {
    //     console.log('appended');
    //     fs.readFile('./txt.txt', 'utf-8',(err,data ) => console.log(data));
    //     console.log('read appended data')
    // });
    // console.log('______---------')


// // // delete a file

    // fs.writeFile('./txt2.txt',"another text to delete",() => console.log('another file created '));
    // console.log('file ------');
    // fs.unlink('./txt2.txt',() => console.log('delete another file'));
    // console.log('file ------');

// // // rename a file

    // fs.rename('./txt.txt','./text.txt',() => {

    //     console.log('renamed');
    // });