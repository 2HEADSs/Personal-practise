/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  let length = this.length;
  if (rowsCount * colsCount !== length) {
    return [];
  }
  let result = Array.from({ length: rowsCount }, () => []);

  let index = 0;
  for (let c = 0; c < colsCount; c++) {
    if (c % 2 == 0) {
      for (let r = 0; r < rowsCount; r++) {
        result[r].push(this[index]);
        index++;
      }
    } else {
      for (let r = rowsCount - 1; r >= 0; r--) {
        result[r].push(this[index]);
        index++;
      }
    }
  }
  return result
};

const arr = [1, 2, 3, 4];
arr.snail(1, 4); // [[1,2,3,4]]
