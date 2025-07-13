/*
 * @title: DFS
 * @time: O(v + e)
 * @space: O(v + e)
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
    const result = [];
    const visited = new Array(numCourses).fill(0);
    const adj = Array.from({ length: numCourses }, () => []);

    for (const [course, pre] of prerequisites) adj[pre].push(course);

    const dfs = node => {
        if (visited[node] === 1) return false;
        if (visited[node] === 2) return true;

        visited[node] = 1;
        for (const neighbor of adj[node]) if (!dfs(neighbor)) return false;
        visited[node] = 2;
        result.push(node);
        return true;
    };

    for (let i = 0; i < numCourses; i++) if (!dfs(i)) return [];

    return result.reverse();
};

