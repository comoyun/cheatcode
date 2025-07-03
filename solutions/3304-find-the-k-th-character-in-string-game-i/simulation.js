/*
 * @title: Simulation
 * @time: Exponential
 * @space: Exponential
 */

/**
 * @param {number} k
 * @return {character}
 */
const kthCharacter = k => {
    const word = ['a'];
    while (word.length < k) {
        let len = word.length;
        for (let i = 0; i < len; i++) {
            let code = word[i].charCodeAt(0);
            if (code === 122) code = 97;
            else code++;
            word.push(String.fromCharCode(code));
        }
    }
    return word[k - 1];
};
