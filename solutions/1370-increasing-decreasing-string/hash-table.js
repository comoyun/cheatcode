// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {string}
 */
const sortString = s => {
    const occ = new Array(26).fill(0);

    let result = [];

    for (const char of s) occ[char.charCodeAt(0) - 97]++;

    while (result.length !== s.length) {
        for (let i = 0; i < occ.length; i++) {
            if (occ[i]) {
                result.push(String.fromCharCode(97 + i));
                occ[i]--;
            }
        }

        for (let i = occ.length - 1; i >= 0; i--) {
            if (occ[i]) {
                result.push(String.fromCharCode(97 + i));
                occ[i]--;
            }
        }
    }

    return result.join('');
};

