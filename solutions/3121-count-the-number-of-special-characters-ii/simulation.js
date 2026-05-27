// time: O(n)
// space: O(1)

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = word => {
    const n = word.length;
    const low = new Array(26).fill(Infinity);
    const up = new Array(26).fill(-1);
    let result = 0;

    for (let i = 0; i < n; i++) {
        const letter = word[i];
        const code = letter.charCodeAt(0);
        if (code >= 97) low[code - 97] = i;
        else if (up[code - 65] === -1) up[code - 65] = i;
    }

    for (let i = 0; i < 26; i++) if (low[i] < up[i]) result++;

    return result;
};

