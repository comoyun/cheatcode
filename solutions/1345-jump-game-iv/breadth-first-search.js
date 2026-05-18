// time: O(n)
// space: O(n)

/**
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = arr => {
    const queue = [[0, 0]];
    const n = arr.length;
    const visited = new Array(n).fill(false);
    const map = {};
    let qid = 0;

    for (let i = 0; i < n; i++) {
        const num = arr[i];
        map[num] ??= [];
        map[num].push(i);
    }

    while (qid < queue.length) {
        const [idx, moves] = queue[qid++];

        visited[idx] = true;

        if (idx === n - 1) return moves;
        if (idx + 1 < n && !visited[idx + 1]) queue.push([idx + 1, moves + 1]);
        if (idx - 1 >= 0 && !visited[idx - 1]) queue.push([idx - 1, moves + 1]);

        while (map[arr[idx]].length) {
            const curr = map[arr[idx]].pop();
            if (visited[curr]) continue;
            queue.push([curr, moves + 1]);
        }
    }

    return -1;
};

