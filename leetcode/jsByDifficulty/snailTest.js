function snail(nums, rows, cols) {
  let result = [];
  let length = nums.length;
  if (rows * cols !== length) {
    return result;
  }

  for (let i = 0; i < rows; i++) {
    console.log(1);
    result.push([]);
  }
  for (let k = 0; k < rows; k++) {
    for (let i = k; i <= cols; i++) {
      result[i].push(nums.shift());
    }
  }
  console.log(result[0]);
}

snail(
  [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],
  5,
  4
);
