/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
      let stringX = x.toString();
  for (let i = 0; i < stringX.length / 2; i++) {
    if (stringX[i] != stringX[stringX.length - i - 1]) {
      return false;
    }
  }
  return true;
};