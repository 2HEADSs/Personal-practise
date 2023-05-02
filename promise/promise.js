let promiseFn = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Completed')
        } else {
            reject('Rejected')
        }
    }, 3000);
});

console.log(typeof promiseFn);
console.log(promiseFn);
promiseFn
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })