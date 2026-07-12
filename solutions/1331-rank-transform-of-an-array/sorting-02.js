/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = arr => {
    const n = arr.length;
    const result = new Array(n).fill(0);

    arr = arr.map((el, idx) => [el, idx]);
    arr.sort((a, b) => a[0] - b[0]);

    let rank = 0;
    let prev = null;

    for (let i = 0; i < n; i++) {
        const [el, idx] = arr[i];

        if (el !== prev) rank++;

        prev = el;
        result[idx] = rank;
    }

    return result;
};
