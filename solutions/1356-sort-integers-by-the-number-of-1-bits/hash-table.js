// time: O(n log n)
// space: O(log n)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = arr => {
    const freq = Array.from({ length: 32 }, () => []);
    const result = [];

    for (const num of arr) {
        let bits = 0;
        let curr = num;

        while (curr) {
            bits += curr & 1;
            curr >>= 1;
        }

        freq[bits].push(num);
    }

    for (const nums of freq)
        for (const num of nums.sort((a, b) => a - b)) result.push(num);

    return result;
};
