const fs = require('fs');
const path = require('path');
const hello = 'hello,i am a string';
fs.writeFileSync('../text.txt', hello,(err) => {
    if (err) throw err;
    else console.log('File is created successfully.');
});
const pathName = path.join( __dirname ,'../','text.txt');
fs.readFile(pathName, (err, data) => {
    if (err) throw err;
    else console.log(data.toString());
});