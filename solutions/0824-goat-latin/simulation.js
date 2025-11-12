// time: O(nk)
// space: O(n)

/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = sentence => {
    const words = sentence.split(' ');
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (vowels.indexOf(word[0]) !== -1) word += 'ma';
        else word = word.slice(1) + word[0] + 'ma';

        word += 'a'.repeat(i + 1);

        words[i] = word;
    }

    return words.join(' ');
};
