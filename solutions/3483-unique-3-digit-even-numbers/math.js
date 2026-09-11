// time: O(1)
// space: O(1)

/**
 * @param {number[]} digits
 * @return {number}
 */
const totalNumbers = digits => {
    const freq = new Array(10).fill(0);
    let result = 0;
    let uniq = 0;
    let dupl = 0;

    for (const digit of digits) freq[digit]++;

    for (let digit = 0; digit < 10; digit++) {
        uniq += !!freq[digit];
        dupl += digit > 0 && freq[digit] > 1;
    }

    for (let even = 0; even < 10; even += 2) {
        if (!freq[even]) continue;
        freq[even]--;

        let uniqn = uniq - !freq[even];
        let nonzero = uniqn - !!freq[0];
        let dupln = dupl - (even > 0 && freq[even] === 1);

        result += nonzero * (uniqn - 1) + dupln;
        freq[even]++;
    }

    return result;
};
