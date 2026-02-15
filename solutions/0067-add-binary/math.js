// time: O(N)
// space: O(N)

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;
    let k = 0;
    const result = [];

    while (i >= 0 || j >= 0 || k) {
        const na = i >= 0 ? +a[i--] : 0;
        const nb = j >= 0 ? +b[j--] : 0;
        const s = na + nb + k;
        k = Math.floor(s / 2);
        result.push(s % 2);
    }

    return result.reverse().join('');
};

