// time: O(n^2)
// space: O(n)

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = isConnected => {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let count = 0;

    const dfs = city => {
        visited[city] = true;
        for (let neighbor = 0; neighbor < n; neighbor++)
            if (isConnected[city][neighbor] && !visited[neighbor])
                dfs(neighbor);
    };

    for (let city = 0; city < n; city++) {
        if (!visited[city]) {
            dfs(city);
            count++;
        }
    }

    return count;
};
