// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const digitSum = (s, k) => {
    const process = s => {
        const n = s.length;
        const str = [];
        for (let i = 0; i < n; i += k) {
            let sum = 0;
            for (let j = i; j < Math.min(n, i + k); j++) sum += +s[j];
            str.push(sum);
        }
        return str.join('');
    };

    while (s.length > k) s = process(s);
    return s;
};
