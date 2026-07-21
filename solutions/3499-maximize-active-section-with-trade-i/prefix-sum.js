// time: O(n)
// space: O(n)

/**
 * @param {string} s
 * @return {number}
 */
const maxActiveSectionsAfterTrade = s => {
    const n = s.length;
    const prefix = new Array(n).fill(0);

    for (let i = 0; i < n; i++) prefix[i] = (i > 0 ? prefix[i - 1] : 0) + +s[i];

    let idx = 0;
    let result = prefix[n - 1];
    while (idx < n) {
        let zeros1 = 0;
        let ones = 0;
        while (idx < n && s[idx] === '0') {
            zeros1++;
            idx++;
        }
        if (zeros1) {
            while (idx < n && s[idx] === '1') {
                ones++;
                idx++;
            }

            if (ones) {
                let zeros2 = 0;

                while (idx < n && s[idx] === '0') {
                    idx++;
                    zeros2++;
                }

                if (zeros2) {
                    let count1 = zeros1 + ones + zeros2;
                    let count2 = prefix[n - 1] - prefix[idx - 1];
                    let count3 = prefix[idx - count1];
                    result = Math.max(result, count1 + count2 + count3);
                    idx -= zeros2;
                }
            } else {
                idx++;
            }
        } else {
            idx++;
        }
    }

    return result;
};
