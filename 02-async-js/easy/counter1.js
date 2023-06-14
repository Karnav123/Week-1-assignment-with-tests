let count = 0;

function counter(){
    return new Promise((resolve) => {
        count++;
        resolve(count);
    });
}

setInterval(() => {
    counter()
    .then((count) => {
        console.log(count);
    })
}, 1000);