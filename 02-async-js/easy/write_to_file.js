const fs = require('fs');

fs.readFile('myfile.txt', 'utf-8', (err, data) => {
    fs.writeFile('written.txt', data, 'utf8', (err) => {
        console.log(err);
    });
});
