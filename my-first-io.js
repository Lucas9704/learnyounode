const fs = require('fs');

const file = process.argv[2];
const strings = fs.readFileSync(file , 'utf8');
const lines = strings.split('\n').length - 1;
console.log(lines);