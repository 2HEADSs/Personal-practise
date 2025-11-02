function snail(nums, rows, cols) {
  let length = nums.length;
  if (rows * cols !== length) {
    return [];
  }
  let result = Array.from({ length: rows }, () => []);

  let index = 0;
  for (let c = 0; c < cols; c++) {
    if (c % 2 == 0) {
      for (let r = 0; r < rows; r++) {
        result[r].push(nums[index]);
        index++;
      }
    } else {
      for (let r = rows - 1; r >= 0; r--) {
        result[r].push(nums[index]);
        index++;
      }
    }
  }
  console.log(result);
}

snail(
  [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],
  5,
  4
);
