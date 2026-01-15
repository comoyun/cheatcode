// time: O(N * M * K)
// space: O(N + M)

/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
const maximizeSquareHoleArea = (n, m, hBars, vBars) => {
    let result = 0;

    const hSet = new Set(hBars);
    const vSet = new Set(vBars);

    for (let i = 0; i < hBars.length; i++) {
        for (let j = 0; j < vBars.length; j++) {
            let tempI = hBars[i];
            let tempJ = vBars[j];
            let side = 1;
            while (hSet.has(tempI) && vSet.has(tempJ)) {
                side++;
                tempI++;
                tempJ++;
            }
            result = Math.max(result, side * side);
        }
    }

    return result;
};

