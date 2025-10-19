/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  let length = obj.length;
  if (length) {
    return length < 0;
  } else {
    return Object.entries(obj).length <= 0;
  }
};
