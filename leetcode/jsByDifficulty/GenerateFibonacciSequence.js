// DECISION

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let arr = [];
  arr[0] = 0;

  //   while (true) {
  //     yield arr[arr.length - 1];
  //     if (arr.length == 1) {
  //       arr.push(1);
  //     } else {
  //       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  //       console.log(arr);
  //     }
  //   }

  while (true) {
      let length = arr.length;
    yield arr[length - 1];
    if (arr.length == 1) {
      arr[1] = 1;
    } else {
      arr[length] = arr[length - 1] + arr[length - 2];
    }
  }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
gen.next().value;
gen.next().value; // 1

/*
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

 

Example 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
Example 2:

Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
*/
