/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (classFunction == null) return false;
  if (
    (typeof obj == "string" && classFunction == String) ||
    (typeof obj == "number" && classFunction == Number) ||
    (typeof obj == "bigint" && classFunction == BigInt) ||
    (typeof obj == "symbol" && classFunction == Symbol) ||
    (typeof obj == "boolean" && classFunction == Boolean) ||
    (classFunction === Object && obj != null && obj != undefined)
  ) {
    return true;
  }
  if (
    typeof checkIfInstanceOf !== "function" &&
    typeof classFunction !== "object"
  ) {
    return false;
  }

  try {
    return obj instanceof classFunction;
  } catch (error) {
    return false;
  }
};

checkIfInstanceOf(new Date(), Date); // true
checkIfInstanceOf(5, Number); // false
