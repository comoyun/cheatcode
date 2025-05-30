/*
 * @title: BFS
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

    const bfs = start => {
        const queue = [[start, 0]];
        const dist = {};

        while (queue.length) {
            const [node, count] = queue.shift();
            if (node === -1) continue;
            if (dist[node] !== undefined) continue;

            dist[node] = count;

            for (const nei of adjList[node])
                if (dist[nei] === undefined) queue.push([nei, count + 1]);
        }
        return dist;
    };

    let result = -1,
        min = Infinity;

    const distA = bfs(node1),
        distB = bfs(node2);

    for (let i = 0; i < edges.length; i++) {
        const greatest = Math.max(distA[i], distB[i]);
        if (min > greatest) {
            result = i;
            min = greatest;
        }
    }

    return result;
};
