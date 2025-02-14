class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        target = 0
        finalArr = []
        nums.sort()
        print(nums)

        for i, n in enumerate(nums):
            currVal = nums[i]
            if i > 0 and nums[i - 1] == currVal:
                continue

            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = n + nums[l] + nums[r]
                if threeSum > target:
                    r -=1
                elif threeSum < target:
                    l+=1
                else:
                    finalArr.append([n, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l - 1] and l < r:
                        l+=1 
        return finalArr
                