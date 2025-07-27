// time: O(n)
// space: O(n)

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = rooms => {
    const seen = new Set();
    const dfs = start => {
        seen.add(start);
        for (let i = 0; i < rooms[start].length; i++) {
            const key = rooms[start][i];
            if (seen.has(key)) continue;
            dfs(key);
        }
    };
    dfs(0);
    return seen.size === rooms.length;
};
