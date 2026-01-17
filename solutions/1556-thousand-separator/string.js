// time: O(N)
// space: O(N)

/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = n => {
    n = n.toString();
    let len = 0;
    const result = [];

    for (let i = n.length - 1; i >= 0; i--) {
        len++;
        result.push(n[i]);

        if (len % 3 === 0 && i > 0) result.push('.');
    }

    return result.reverse().join('');
};

