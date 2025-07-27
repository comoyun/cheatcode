// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = nums => {
    let evenCount = 0;

    const getCount = num => {
        let count = 0;
        while (num) {
            count++;
            num = Math.floor(num / 10);
        }
        return count;
    };

    for (const num of nums) {
        /*
         * You can also use Math.floor(Math.log10(num))
         * const count = Math.floor(Math.log10(num)) + 1;
         */
        const count = getCount(num);
        if (count & 1) continue;
        evenCount++;
    }

    return evenCount;
};
