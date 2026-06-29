// time: O(n * m)
// space: O(1)

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
const numOfStrings = (patterns, word) => {
    const BASE = 26;
    const MOD = 10 ** 9 + 7;

    let result = 0;

    for (const pattern of patterns) {
        let patternHash = 0;
        let hash = 0;
        let left = 0;

        let power = 1;
        for (let i = 1; i < pattern.length; i++) power = (power * BASE) % MOD;

        for (const char of pattern) {
            const code = char.charCodeAt(0) - 96;
            patternHash = (patternHash * BASE + code) % MOD;
        }

        for (let right = 0; right < word.length; right++) {
            const code = word.charCodeAt(right) - 96;
            hash = (hash * BASE + code) % MOD;

            const len = right - left + 1;

            if (len === pattern.length) {
                if (hash === patternHash) {
                    result++;
                    break;
                }

                const leftCode = word.charCodeAt(left++) - 96;
                hash = (hash - leftCode * power) % MOD;
                if (hash < 0) hash += MOD;
            }
        }
    }

    return result;
};
