const fs = require('fs');
console.log(`${__dirname}`);

const sql = fs.readFileSync(`${__dirname}/customer.txt`, (err, data) => {
    if (err) console.log(err);
    return data
})

const sql_str = sql.toString();
// console.log(sql_str)

const search = `"`
const search2 = `id[\ \t]+INTEGER[\ \t]+PRIMARY[\ \t]+KEY[\ \t]+AUTOINCREMENT\,`
const replacer = new RegExp(search, 'g')
const replacer2 = new RegExp(search2, 'g')
const content = sql_str.replace(replacer, `'`)
console.log('replacer2: ', replacer2)
const content2 = content.replace(replacer2, `id serial PRIMARY KEY NOT NULL,`);

console.log('replaced content: \n', content2);
fs.writeFile(`${__dirname}/replaced-customer.txt`, content2, err => {
    if (err) {
        console.log(err);
    }
})