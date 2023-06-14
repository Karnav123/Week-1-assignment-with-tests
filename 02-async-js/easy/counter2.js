let count = 0;

async function counter() {
    count++;
    console.log(count);
    setTimeout(counter, 1000);
}

counter();

