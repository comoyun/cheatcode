// time: O()
// space: O()

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (licensePlate, words) => {
    const lpFreq = {};
    let result = '';

    for (const char of licensePlate.toLowerCase())
        if (/[a-z]/.test(char)) lpFreq[char] = (lpFreq[char] || 0) + 1;

    for (const word of words) {
        const freq = { ...lpFreq };
        for (const char of word.toLowerCase()) if (char in freq) freq[char]--;
        if (Object.values(freq).every(v => v <= 0))
            if (!result || word.length < result.length) result = word;
    }

    return result;
};

