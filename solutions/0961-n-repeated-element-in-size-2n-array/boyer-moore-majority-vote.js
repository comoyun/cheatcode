// time: O(N)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = nums => {
    while (true) {
        let count = 0;
        let repeated = 0;

        const idx = Math.floor(Math.random() * nums.length);

        for (let i = 0; i < nums.length; i++) {
            if (i === idx) continue;

            const num = nums[i];
            if (count === 0) {
                repeated = num;
                count = 1;
            } else if (num === repeated) {
                count++;
            } else {
                count--;
            }
        }

        let seen = false;
        for (const num of nums) {
            if (num === repeated) {
                if (seen) return repeated;
                seen = true;
            }
        }
    }
};
