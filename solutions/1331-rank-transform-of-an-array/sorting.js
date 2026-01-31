// time: O(N log N)
// space: O(N)

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = arr => {
    const result = new Array(arr.length).fill(0);
    let max = new Set(arr).size;
    arr = arr.map((el, idx) => [el, idx]);
    arr.sort((a, b) => b[0] - a[0]);

    let i = 1,
        prev = arr[0];
    result[prev[1]] = max--;
    while (i < arr.length) {
        const curr = arr[i];

        if (prev[0] === curr[0]) {
            result[curr[1]] = max + 1;
            i++;
            continue;
        }

        result[curr[1]] = max;
        prev = curr;
        i++;
        max--;
    }

    return result;
};

