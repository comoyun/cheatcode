// time: O(1)
// space: O(1)

/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = path => {
    const set = new Set(['0,0']);
    let x = 0,
        y = 0;

    for (const direction of path) {
        if (direction === 'N') y++;
        else if (direction === 'S') y--;
        else if (direction === 'W') x--;
        else x++;

        const coord = `${x},${y}`;

        if (set.has(coord)) return true;
        set.add(coord);
    }

    return false;
};
