/*
 * @title: Hash Table
 * @time: O(n)
 * @space: O(1)
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = (secret, guess) => {
    let bulls = 0,
        cows = 0;
    const count = {};

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) bulls++;
        else count[secret[i]] = (count[secret[i]] || 0) + 1;
    }

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] !== guess[i] && count[guess[i]]) {
            cows++;
            count[guess[i]]--;
        }
    }

    return `${bulls}A${cows}B`;
};
