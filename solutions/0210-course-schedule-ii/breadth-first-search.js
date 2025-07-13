/*
 * @title: BFS
 * @time: O(n + p)
 * @space: O(n + p)
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
    const inDegree = Array(numCourses).fill(0);
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [to, from] of prerequisites) {
        graph[from].push(to);
        inDegree[to]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) 
        if (!inDegree[i]) queue.push(i);

    const result = [];

    while (queue.length) {
        const curr = queue.shift();
        result.push(curr);

        for (const neighbor of graph[curr])
            if (!--inDegree[neighbor]) queue.push(neighbor);
    }

    return result.length === numCourses ? result : [];
};
