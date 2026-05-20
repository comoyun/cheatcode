// time: O(n^3)
// space: O(n)

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = (A, B) => {
    const n = A.length;
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let count = 0;

        for (let j = 0; j <= i; j++) {
            for (let k = 0; k <= i; k++) {
                if (A[j] === B[k]) {
                    count++;
                    break;
                }
            }
        }

        result[i] = count;
    }

    return result;
};
