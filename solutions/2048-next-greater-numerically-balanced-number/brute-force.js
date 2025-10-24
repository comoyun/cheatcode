// time: O(k * d)
// space: O(1)

/**
 * @param {number} n
 * @return {number}
 */
const nextBeautifulNumber = n => {
    let curr = n;

    const isBeautiful = num => {
        const freq = {};

        while (num) {
            const digit = num % 10;
            freq[digit] = (freq[digit] || 0) + 1;
            num = Math.floor(num / 10);
        }

        for (const key in freq) {
            const f = freq[key];
            if (+key !== f) return false;
        }

        return true;
    };

    while (true) if (isBeautiful(++curr)) return curr;
};
