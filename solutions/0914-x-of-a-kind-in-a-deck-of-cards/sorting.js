// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = deck => {
    const n = deck.length;
    deck.sort((a, b) => a - b);

    let x = 0;
    let idx = 0;

    const gcd = (a, b) => {
        while (a) {
            const temp = a;
            a = b % a;
            b = temp;
        }
        return b;
    };

    while (idx < n) {
        let count = 0;
        while (idx + count < n && deck[idx + count] === deck[idx]) count++;
        x = gcd(x, count);
        if (x === 1) return false;
        idx += count;
    }

    return true;
};

