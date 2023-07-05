const fs = require('fs');
console.log(`${__dirname}`);

const sql = fs.readFileSync(`${__dirname}/bobby.txt`, (err, data) => {
    if (err) console.log(err);
    return data
})

const sql_str = sql.toString();
console.log('sql_str from .txt file: ', sql_str)

const search = `"`
const replacer = new RegExp(search, 'g')
const replaced = sql_str.replace(replacer, `'`);
console.log('replaced.txt: \n', replaced);
fs.writeFile(`${__dirname}/replaced-bobby.txt`, replaced, err => {
    if (err) {
        console.log(err);
    }
})