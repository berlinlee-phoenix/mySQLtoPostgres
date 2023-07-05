const fs = require('fs');
console.log(`${__dirname}`);

const students = fs.readFileSync(`${__dirname}/students.txt`, (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    return data;
})

const students_str = students.toString();
console.log(students_str)

const search = `"`
const replacer = new RegExp(search, 'g')
const replaced = students_str.replace(replacer, `'`);
console.log('replaced.txt: \n', replaced);
fs.writeFile(`${__dirname}/replaced-students.txt`, replaced, err => {
    if (err) {
        console.log(err);
    }
})