// time: O(n)
// space: O(1)

/**
 * @param {string} word
 * @return {number}
 */
const numberOfSpecialChars = word => {
    let result = 0;
    const map = {};

    for (const char of word) 
        if (char >= 'A' && char <= 'Z') map[char] = false;

    for (const char of word) {
        if (char >= 'a' && char <= 'z') {
            const up = char.toUpperCase();
            if (up in map && !map[up]) {
                map[up] = true;
                result++;
            }
        }
    }

    return result;
};

