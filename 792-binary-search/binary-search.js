/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        let l = Math.floor((nums.length - 1) / 2), r = nums.length - 1

        while (l <= r) {
            if (nums[l] > target) {
                r = l;
                l = 0;
            } else if (nums[l] < target) {
                l++;
            } else if (nums[l] == target) {
                return l;
            }

            if (nums[r] > target) {
                r--;
            } else if (nums[r] == target) {
                return r
            }
        }

        return -1
};