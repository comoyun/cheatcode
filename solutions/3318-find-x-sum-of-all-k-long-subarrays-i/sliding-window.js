// time: O(nk)
// space: O(k)

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findXSum = (nums, k, x) => {
    const result = [];
    const freq = {};
    let left = 0;

    const getTop = () => {
        const pairs = Object.entries(freq)
            .filter(([_, count]) => count)
            .map(([num, count]) => [+num, count]);

        pairs.sort((a, b) => b[1] - a[1] || b[0] - a[0]);

        let sum = 0,
            unique = 0;
        for (const [num, count] of pairs) {
            if (unique >= x) break;
            sum += num * count;
            unique++;
        }

        freq[nums[left++]]--;
        return sum;
    };

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right];
        freq[num] = (freq[num] || 0) + 1;

        if (right - left + 1 === k) result.push(getTop());
    }

    return result;
};
