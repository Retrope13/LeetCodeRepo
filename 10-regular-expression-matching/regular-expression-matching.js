/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return RegExp("^" + p + "$" ).test(s);
};