/*
 * @title: Simulation
 * @time: Exponential
 * @space: Exponential
 */

const word = ['a'];
while (word.length < 500) {
    let len = word.length;
    for (let i = 0; i < len; i++) {
        let code = word[i].charCodeAt(0);
        if (code === 122) code = 97;
        else code++;
        word.push(String.fromCharCode(code));
    }
}

/**
 * @param {number} k
 * @return {character}
 */
const kthCharacter = k => word[k - 1];
