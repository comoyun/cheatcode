// time: O()
// space: O()

/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = n => {
    const getFreq = num => {
        const freq = new Array(10).fill(0);
        const old = num;
        while (num) {
            freq[num % 10]++;
            num = Math.floor(num / 10);
        }
        console.log(freq.join(','), old)
        return freq.join(',');
    };

    const powers = new Set();

    for (let i = 0; i < 32; i++)
        powers.add(getFreq(2 ** i));

    return powers.has(getFreq(n));
};

