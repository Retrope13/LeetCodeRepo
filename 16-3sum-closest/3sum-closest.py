class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        finalArr = []
        nums.sort()
        closestSum = float("-inf")
        closestDiff = float("inf")

        for i, n in enumerate(nums):
            currVal = nums[i]
            if i > 0 and nums[i - 1] == currVal:
                continue

            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = n + nums[l] + nums[r]
                if threeSum > target:
                    if abs(threeSum - target) < closestDiff:
                        closestSum = threeSum
                        closestDiff = abs(threeSum - target)
                    r -=1
                elif threeSum < target:
                    if abs(threeSum - target) < closestDiff:
                        closestSum = threeSum
                        closestDiff = abs(threeSum - target)
                    l+=1
                else:
                    return threeSum
        return closestSum
                