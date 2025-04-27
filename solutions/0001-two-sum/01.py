# 
# @title: Hashmap
# @time: O(n)
# @space: O(n)
#

def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    num_map = {}
    for i, num in enumerate(nums):
        search = target - num
        if search in num_map:
            return [num_map[search], i]
        num_map[num] = i

    # No need to return anything here,
    # as the problem guarantees at least one solution.
