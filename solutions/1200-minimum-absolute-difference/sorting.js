// time: O(N)
// space: O(N)

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = arr => {
    const result = [];
    arr.sort((a, b) => a - b);

    let min = Infinity;

    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1];
        const curr = arr[i];
        min = Math.min(min, curr - prev);
    }

    for (let i = 1; i < arr.length; i++) {
        const prev = arr[i - 1];
        const curr = arr[i];
        if (curr - prev === min) result.push([prev, curr]);
    }

    return result;
};

