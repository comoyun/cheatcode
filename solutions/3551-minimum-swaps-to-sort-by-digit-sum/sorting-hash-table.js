// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = nums => {
    const sorted = [...nums];
    const n = nums.length;
    let result = 0;

    const digitSum = num => {
        let sum = 0;
        while (num) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            sum += digit;
        }

        return sum;
    };

    const map = {};

    sorted.sort((a, b) => digitSum(a) - digitSum(b) || a - b);

    for (let i = 0; i < n; i++) map[sorted[i]] = i;

    for (let i = 0; i < n; i++) {
        while (map[nums[i]] !== i) {
            [nums[map[nums[i]]], nums[i]] = [nums[i], nums[map[nums[i]]]];
            result++;
        }
    }

    return result;
};

