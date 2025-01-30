/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
        if (numRows == 1) {
        return s;
    }
    let dict = {};

    let goingUpBool = true;
    let dictPos = 0;
    for (let i = 0; i < s.length; i++) {
        if (dictPos == 0) {
            goingUpBool = true;
        } else if (dictPos == numRows - 1) {
            goingUpBool = false
        }
        if (goingUpBool) {
            dict[dictPos] = dict[dictPos] + s[i];
            dictPos++;
        } else if (!goingUpBool) {
            dict[dictPos] = dict[dictPos] + s[i];
            dictPos--;
        }
    }
    let finalStr = "";
    for (let i = 0; i < numRows; i++) {
        finalStr = finalStr + dict[i];
    }
    return finalStr.replaceAll("undefined", "");
};