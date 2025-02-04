/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
        s = s.trim();
    let finalNumStr = "";
    let positiveBool = true;
    if (s[0] === "-") {
        positiveBool = false;
        s = s.slice(1, s.length);
    } else if (s[0] === "+") {
        s = s.slice(1, s.length);
    }
    const regex = /\d+/;
    let foundFirstChar = false;
    for (let i = 0; i < s.length; i++) {
        if (regex.test(s[i])) {
            finalNumStr = finalNumStr + s[i];
        } else {
            foundFirstChar = true;
            if (foundFirstChar) {
                break;
            }
        }
    }
    let finalNum = positiveBool ? Number(finalNumStr) : Number(finalNumStr) * -1;
    if (finalNum > Math.pow(2, 31) - 1) {
        finalNum = Math.pow(2, 31) - 1;
    } else if (finalNum < Math.pow(-2, 31)) {
        finalNum = Math.pow(-2, 31);
    }
    return finalNum;
};