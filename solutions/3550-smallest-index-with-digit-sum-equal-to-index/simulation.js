// time: O(n log m)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const smallestIndex = nums => {
    const digitSum = num => {
        let sum = 0;
        while (num) {
            sum += num % 10;
            num = num / 10 | 0;
        }
        return sum;
    }
    
    for (let i = 0; i < nums.length; i++) 
        if (digitSum(nums[i]) === i)
            return i;

    return -1;
};
