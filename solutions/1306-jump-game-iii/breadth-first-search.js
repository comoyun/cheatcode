// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
    const queue = [start];
    const n = arr.length;
    const visited = new Array(n).fill(false);

    while (queue.length) {
        const idx = queue.shift();

        visited[idx] = true;

        if (arr[idx] === 0) return true;
        if (idx + arr[idx] < n && !visited[idx + arr[idx]])
            queue.push(idx + arr[idx]);
        if (idx - arr[idx] >= 0 && !visited[idx - arr[idx]])
            queue.push(idx - arr[idx]);
    }

    return false;
};

