// time: O()
// space: O()

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = word => {
    /* all letters are capitals */
    let allCapitals = true;
    for (const char of word) {
        if (char.toUpperCase() !== char) {
            allCapitals = false;
            break;
        }
    }

    if (allCapitals) return true;

    /* all letters are in lower case */
    let allLower = true;
    for (const char of word) {
        if (char.toLowerCase() !== char) {
            allLower = false;
            break;
        }
    }

    if (allLower) return true;

    /* first char capital */
    if (word.length && word[0].toUpperCase() !== word[0]) return false;
    allLower = true;
    for (let i = 1; i < word.length; i++) {
        const char = word[i];
        if (char.toLowerCase() !== char) {
            allLower = false;
            break;
        }
    }

    return allLower;
};
