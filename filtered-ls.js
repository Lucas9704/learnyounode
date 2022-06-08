const fs = require('fs');
const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err, list) => {
    if (err) throw err;
    list.forEach(file => {
            file.split('.')[1] === ext ? console.log(file) : null;
        });
});
