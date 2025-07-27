// time: O(n)
// space: O(1)

/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = word => {
    if (word.length < 3) return false;

    let vowels = 0;
    let consonants = 0;

    for (const ch of word) {
        const low = ch.toLowerCase();
        const code = low.charCodeAt(0);

        if (code >= 48 && code <= 57) continue;
        if (code < 97 || code > 122) return false;

        'aeiou'.includes(low) ? vowels++ : consonants++;
    }

    return vowels > 0 && consonants > 0;
};
