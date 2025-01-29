/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
       sArr = s.split("");
    if (s.length == 1) {
        return s;
    }

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longestSoFar = "";
    for (let i = 0; i < s.length; i++) {
        oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longestSoFar.length) {
            longestSoFar = oddPalindrome;
        }

        evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longestSoFar.length) {
            longestSoFar = evenPalindrome;
        }
    }
    return longestSoFar;
};