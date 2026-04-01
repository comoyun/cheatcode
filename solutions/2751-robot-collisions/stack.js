// time: O(n log n)
// space: O(n)

/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths = (positions, healths, directions) => {
    const n = positions.length;
    const robots = Array.from({ length: n }, (_, idx) => [positions[idx], idx]);

    robots.sort((a, b) => a[0] - b[0]);

    const stack = [];
    for (const robot of robots) {
        const [_, idx] = robot;
        if (directions[idx] === 'L') {
            if (stack.length && healths[stack.at(-1)[1]] <= healths[idx]) {
                while (
                    stack.length &&
                    healths[stack.at(-1)[1]] < healths[idx]
                ) {
                    healths[stack.pop()[1]] = 0;
                    healths[idx]--;
                }

                if (stack.length && healths[stack.at(-1)[1]] === healths[idx]) {
                    healths[stack.pop()[1]] = 0;
                    healths[idx] = 0;
                    continue;
                }

                if (stack.length && healths[stack.at(-1)[1]] > healths[idx]) {
                    healths[idx] = 0;
                    healths[stack[stack.length - 1][1]]--;
                    if (healths[stack[stack.length - 1][1]] <= 0) stack.pop();
                }
            } else {
                if (stack.length) {
                    healths[idx] = 0;
                    healths[stack[stack.length - 1][1]]--;
                    if (healths[stack[stack.length - 1][1]] <= 0) stack.pop();
                }
            }
        } else {
            stack.push(robot);
        }
    }

    return healths.filter(health => health > 0);
};
