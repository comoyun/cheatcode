// time: O(N * N)
// space: O(N)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = (s, k) => {
    while (k < s.length) {
        let sum = 0;
        let count = 0;
        let str = '';
        for (const char of s) {
            sum += +char;
            count++;

            if (count === k) {
                str += sum;
                sum = 0;
                count = 0;
            }
        }
        s = str + (count > 0 ? sum : '');
    }
    return s;
};

