// time: O(N * M * K)
// space: O(N + M)

/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
const maximizeSquareArea = (m, n, hFences, vFences) => {
    // WARNING: This solution gives TLE
    const MOD = 10n ** 9n + 7n;
    let result = 0n;

    hFences = [1, ...hFences, m].sort((a, b) => a - b).map(BigInt);
    vFences = [1, ...vFences, n].sort((a, b) => a - b).map(BigInt);

    for (let i = 0; i < hFences.length; i++) {
        for (let j = 0; j < vFences.length; j++) {
            let k = i;
            let l = j;

            const hStart = hFences[k];
            const vStart = vFences[l];
            let area = 0n;

            while (k < hFences.length && l < vFences.length) {
                const hDiff = hFences[k] - hStart;
                const vDiff = vFences[l] - vStart;

                if (hDiff > vDiff) {
                    l++;
                } else if (vDiff > hDiff) {
                    k++;
                } else {
                    area = hDiff * vDiff;
                    k++;
                    l++;
                }
            }

            if (area > result) result = area;
        }
    }

    return result === 0n ? -1 : Number(result % MOD);
};
