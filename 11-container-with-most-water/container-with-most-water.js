/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
        if (height.length == 1) {
        return 0;
    } else if (height.length == 2) {
        return Math.min(height[0], height[1]);
    }
    let maxArea = 0;
    let beginning = 0;
    let end = height.length - 1
    for (let i = 0; i < height.length; i++) {
        let minHeight = Math.min(height[beginning], height[end]);
        if (minHeight * (end - beginning) > maxArea) {
            maxArea = Math.min(height[beginning], height[end]) * (end - beginning);
        }
        if (minHeight == height[beginning]) {
            beginning++;
        } else if (minHeight == height[end]){
            end--;
        } else if (height[end] == height[beginning]) {
            end--;
            beginning++;
        }
    }
    return maxArea
};