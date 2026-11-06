// time: O()
// space: O()

/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
const countServers = (n, logs, x, queries) => {
    const indices = Array.from({ length: queries.length }, (_, i) => i);

    logs.sort((a, b) => a[1] - b[1]);
    indices.sort((a, b) => queries[a] - queries[b]);

    const result = new Array(queries.length);
    const freq = new Map();

    let left = 0;
    let right = 0;
    let active = 0;

    const update = (server, delta) => {
        const count = (freq.get(server) ?? 0) + delta;

        freq.set(server, count);

        if (count === 0) active--;
        else if (count === 1 && delta > 0) active++;
    };

    for (const index of indices) {
        const query = queries[index];

        while (right < logs.length && logs[right][1] <= query) {
            update(logs[right][0], 1);
            right++;
        }

        while (left < right && logs[left][1] < query - x) {
            update(logs[left][0], -1);
            left++;
        }

        result[index] = n - active;
    }

    return result;
};
