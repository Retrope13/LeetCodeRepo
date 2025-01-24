/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seenChars = {};
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (seenChars[s[i]] >= start) {
            start = seenChars[s[i]] + 1;
        }

        seenChars[s[i]] = i;

        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};

// @lc code=end

