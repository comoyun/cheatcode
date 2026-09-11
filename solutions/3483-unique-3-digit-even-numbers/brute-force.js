// time: O(1)
// space: O(1)

/**
 * @param {number[]} digits
 * @return {number}
 */
const totalNumbers = digits => {
    const freq = new Array(10).fill(0);
    let result = 0;

    for (const digit of digits) freq[digit]++;

    for (let even = 0; even < 10; even += 2) {
        if (!freq[even]) continue;
        freq[even]--;

        for (let a = 1; a < 10; a++) {
            if (!freq[a]) continue;
            freq[a]--;
            for (let b = 0; b < 10; b++) if (freq[b]) result++;
            freq[a]++;
        }

        freq[even]++;
    }

    return result;
};
