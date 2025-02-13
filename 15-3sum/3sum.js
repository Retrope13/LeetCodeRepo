/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    let target = 0;
    if (nums.length <= 2) {
        return [];
    }
    if (nums.length == 3 && (nums.reduce((accum, currVal) => accum + currVal, 0)) == target) {
        return [nums];
    }

    else if ((nums.every((currVal) => currVal == 0))) {
        return [[0, 0, 0]];
    }

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {   
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};