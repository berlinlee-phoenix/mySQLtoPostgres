const fs = require('fs');
console.log(`${__dirname}`);

const donut = fs.readFileSync(`${__dirname}/winstons_donut_logs.txt`, (err, data) => {
    if (err) console.log(err);
    return data
})

const donut_str = donut.toString();
console.log(donut_str)

const search = `"`
const replacer = new RegExp(search, 'g')
const replaced = donut_str.replace(replacer, `'`);
console.log('replaced.txt: \n', replaced);
fs.writeFile(`${__dirname}/replaced-winstons_donut_logs.txt`, replaced, err => {
    if (err) {
        console.log(err);
    }
})