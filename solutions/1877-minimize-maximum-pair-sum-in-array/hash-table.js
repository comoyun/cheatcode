// time: O(N)
// space: O(N)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = nums => {
    let max = 0;
    let result = 0;
    for (const num of nums) max = Math.max(max, num);

    const freq = new Array(max + 1).fill(0);

    for (const num of nums) freq[num]++;
    let left = 1;
    let right = freq.length - 1;

    while (left <= right) {
        if (freq[left] === 0) {
            left++;
        } else if (freq[right] === 0) {
            right--;
        } else {
            result = Math.max(result, left + right);
            freq[left]--;
            freq[right]--;
        }
    }

    return result;
};
