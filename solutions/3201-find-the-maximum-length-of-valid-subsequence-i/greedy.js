// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = nums => {
    let result = 0;
    const patterns = [
        [0, 0],
        [0, 1],
        [1, 0],
    ];
    for (const pattern of patterns) {
        let count = 0;

        for (const num of nums)
            if (num % 2 === pattern[count % 2]) count++;

        result = Math.max(result, count);
    }
    return result;
};

