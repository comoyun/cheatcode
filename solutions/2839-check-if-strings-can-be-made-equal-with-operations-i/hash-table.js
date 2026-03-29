// time: O(n)
// space: O(n)

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const canBeEqual = (s1, s2) => {
    const oddFreq = {};
    const evenFreq = {};

    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        if (i & 1) {
            oddFreq[char] ??= 0;
            oddFreq[char]++;
        } else {
            evenFreq[char] ??= 0;
            evenFreq[char]++;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];

        if (i & 1) {
            if (!(char in oddFreq) || oddFreq[char] === 0) return false;
            oddFreq[char]--;
        } else {
            if (!(char in evenFreq) || evenFreq[char] === 0) return false;
            evenFreq[char]--;
        }
    }

    return true;
};

