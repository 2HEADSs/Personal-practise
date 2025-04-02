function sum3(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

let arrowSum = a => b => c => a + b + c
console.log(arrowSum(5)(6)(8));
console.log(sum3(5)(6)(8));