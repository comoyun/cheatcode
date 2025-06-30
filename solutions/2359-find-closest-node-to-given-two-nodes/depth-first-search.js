/*
 * @title: DFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
const closestMeetingNode = (edges, node1, node2) => {
    const adjList = {};
    for (let i = 0; i < edges.length; i++) {
        const nei = edges[i];
        adjList[i] = adjList[i] || [];
        adjList[i].push(nei);
    }

    let result = -1,
        min = Infinity;
    const distA = new Array(edges.length).fill(Infinity),
        distB = new Array(edges.length).fill(Infinity);

    const dfs = (node, dist, visited = new Set(), count = 0) => {
        if (node === -1 || visited.has(node)) return;
        visited.add(node);
        dist[node] = count;
        for (const nei of adjList[node]) dfs(nei, dist, visited, count + 1);
    };

    dfs(node1, distA);
    dfs(node2, distB);

    for (let i = 0; i < edges.length; i++) {
        const greatest = Math.max(distA[i], distB[i]);
        if (min > greatest) {
            result = i;
            min = greatest;
        }
    }

    return result;
};

const bfs = start => {
    const queue = [[start, 0]];
    const dist = {};

    while (queue.length) {
        const [node, count] = queue.shift();
        if (dist[node] !== undefined) continue;

        dist[node] = count;

        for (const nei of adjList[node])
            if (dist[nei] === undefined) queue.push([nei, count + 1]);
    }
    return dist;
};
