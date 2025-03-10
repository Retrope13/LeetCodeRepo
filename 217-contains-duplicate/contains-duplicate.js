/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    let prevNum;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === prevNum) {
            return true;
        }
        prevNum = nums[i];
    }

    return false;
};