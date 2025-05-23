/*
 * @title: BFS
 * @time: O(n)
 * @space: O(n)
 */

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = rooms => {
    const queue = [0],
        seen = new Set(queue);
    while (queue.length) {
        const key = queue.shift();

        for (const k of rooms[key]) {
            if (seen.has(k)) continue;
            seen.add(k);
            queue.push(k);
        }
    }
    return seen.size === rooms.length;
};
