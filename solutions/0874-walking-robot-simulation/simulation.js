// time: O(n * k + m)
// space: O(m)

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = (commands, obstacles) => {
    const dirs = ['W', 'N', 'E', 'S'];
    const set = new Set();
    let x = 0;
    let y = 0;
    let dir = 1;
    let result = 0;

    for (const obstacle of obstacles) set.add(obstacle.join(','));

    const turnRight = () => {
        dir++;
        dir %= dirs.length;
    };

    const turnLeft = () => {
        dir--;
        if (dir < 0) dir = dirs.length - 1;
    };

    for (const command of commands) {
        if (command < 0) {
            if (command === -2) turnLeft();
            else turnRight();
            continue;
        }

        for (let i = 0; i < command; i++) {
            const direction = dirs[dir];
            let next = [x, y];

            if (direction === 'W') next[0]--;
            else if (direction === 'E') next[0]++;
            else if (direction === 'N') next[1]++;
            else next[1]--;

            if (set.has(next.join(','))) break;

            x = next[0];
            y = next[1];
            result = Math.max(result, x * x + y * y);
        }
    }

    return result;
};

