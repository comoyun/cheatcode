// time: O(n)
// space: O(1)

/**
 * @param {string} s
 * @return {number}
 */
const maxFreqSum = s => {
    const counter = {};
    const vowels = 'aeiou';
    let maxVowels = 0;
    let maxConsonants = 0;

    for (const char of s) {
        counter[char] = (counter[char] || 0) + 1;
        if (vowels.includes(char)) {
            maxVowels = Math.max(maxVowels, counter[char]);
        } else {
            maxConsonants = Math.max(maxConsonants, counter[char]);
        }
    }

    return maxVowels + maxConsonants;
};
