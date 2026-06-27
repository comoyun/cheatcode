// time: O(n log log m)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumLength = nums => {
    const map = {};

    for (const num of nums) map[num] = num in map ? map[num] + 1 : 1;
    let result = 1 in map ? (map[1] & 1 ? map[1] : map[1] - 1) : 0;

    for (const key in map) {
        const num = +key;

        if (num === 1) continue;

        let n = num;
        let pow = 1;
        let length = 0;

        while (n in map) {
            if (map[n] < 2) {
                length++;
                break;
            }

            length += 2;
            pow <<= 1;
            n = num ** pow;
        }

        result = Math.max(result, length & 1 ? length : length - 1);
    }

    return result;
};

