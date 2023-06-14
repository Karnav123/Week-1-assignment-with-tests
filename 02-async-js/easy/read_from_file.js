const fs = require('fs');

fs.readFile('myfile.txt', 'utf-8', (err, data) => {
    console.log(data);
});

function calculateTime(n) {

    const start = Date.now();
    let sum = 0;
    for (let i = 1; i <= n; ++i) {
        sum = sum + i;
    }

    const end = Date.now();
    const time = (end - start)/1000;
    return time;
}

console.log(calculateTime(100));
console.log(calculateTime(100000));
console.log(calculateTime(10000000000));

