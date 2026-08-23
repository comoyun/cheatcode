// time: O(n)
// space: O(n)

/**
 * @param {string} num
 * @return {boolean}
 */
const sumGame = num => {
    const n = num.length;

    const get = s => {
        let nn = 0;
        let qq = 0;

        for (const ch of s) {
            if (ch === '?') qq++;
            else nn += +ch;
        }

        return [nn, qq];
    };

    const [n0, q0] = get(num.substring(0, n / 2));
    const [n1, q1] = get(num.substring(n / 2));

    return (q0 + q1) & 1 || n0 - n1 !== ((q1 - q0) * 9) / 2;
};
