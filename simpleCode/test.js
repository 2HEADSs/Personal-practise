function solve(obj) {
  let length = obj.length;
  if (length) {
    if (length >= 0) {
      return false;
    }
    return true;
  } else {
    console.log(Object.entries(obj).length);
    Object.entries(obj).length <= 0 ? false : true;
  }
}

console.log(solve([1, 2]));
console.log(solve({ a: "1" }));
console.log(solve({ x: 5, y: 42 }));
