/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    strs.reverse();
    let longPrefixVar = strs[0];
    strs.shift();
    let standardLength = longPrefixVar.length // if I try to use longPrefixVar.length in the for loop it could cause complications
    for (let i = 0; i < standardLength; i++) {
        const matches = strs.reduce((accumulator, currentVal) => {
            if (currentVal.match("^" + longPrefixVar)) {
                accumulator = accumulator + 1
            }
            return accumulator
        }, 0)
        if (matches == strs.length) {
            return longPrefixVar;
        } else {
            longPrefixVar = longPrefixVar.slice(0, -1);
        }
    }
    return ""
};