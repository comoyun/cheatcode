// time: O(n)
// space: O(1)

/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = text => {
    const freq = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };

    for (const char of text) if (char in freq) freq[char]++;

    return Math.min(
        freq.b,
        freq.a,
        freq.l >> 1,
        freq.o >> 1,
        freq.n
    );
};

