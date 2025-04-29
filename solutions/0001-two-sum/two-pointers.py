#
# @title: Two Pointers
# @time: O(n log n)
# @space: O(n)
#

def twoSum(nums, target):
    """
    nums: list[int]
    target: int
    return: list[int]
    """
    nums = [[i, num] for i, num in enumerate(nums)]
    nums.sort(key=lambda x: x[1])

    left, right = 0, len(nums) - 1

    while left < right:
        sum_ = nums[left][1] + nums[right][1]
        if sum_ == target:
            return [nums[left][0], nums[right][0]]
        if sum_ > target:
            right -= 1
        else:
            left += 1
