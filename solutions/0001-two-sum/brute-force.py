# 
# @title: Brute Force
# @time: O(n^2)
# @space: O(1)
#

def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            result = nums[i] + nums[j]
            if result == target:
                return [i, j]
