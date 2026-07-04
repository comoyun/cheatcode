// time: O(n + e)
// space: O(n + e)

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = (n, roads) => {
    let result = Infinity;
    const adjList = Array.from({ length: n + 1 }, () => []);
    const visited = new Array(n + 1).fill(false);

    for (const [a, b, distance] of roads) {
        adjList[a].push([b, distance]);
        adjList[b].push([a, distance]);
    }

    const queue = [1];
    visited[1] = true;
    while (queue.length) {
        const node = queue.shift();

        for (const [nei, dist] of adjList[node]) {
            result = Math.min(result, dist);
            if (visited[nei]) continue;
            visited[nei] = true;
            result = Math.min(result, dist);
            queue.push(nei);
        }
    }

    return result;
};
