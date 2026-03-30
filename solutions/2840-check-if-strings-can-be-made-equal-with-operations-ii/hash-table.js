// time: O(n)
// space: O(n)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkStrings = (s1, s2) => {
    const freqOdd = {};
    const freqEven = {};

    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        if (i & 1) freqOdd[char] = (freqOdd[char] || 0) + 1;
        else freqEven[char] = (freqEven[char] || 0) + 1;
    }

    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];

        if (i & 1) {
            if (!(char in freqOdd)) return false;
            if (freqOdd[char] === 0) return false;
            freqOdd[char]--;
        } else {
            if (!(char in freqEven)) return false;
            if (freqEven[char] === 0) return false;
            freqEven[char]--;
        }
    }

    return true;
};

