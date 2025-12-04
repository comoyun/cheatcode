// time: O(n)
// space: O(n)

/**
 * @param {string} directions
 * @return {number}
 */
const countCollisions = directions => {
    const stack = [];
    let collisions = 0;

    for (const d of directions) {
        if (d === 'R') {
            stack.push('R');
            continue;
        }

        if (d === 'S') {
            while (stack.length && stack[stack.length - 1] === 'R') {
                stack.pop();
                collisions++;
            }

            if (!(stack.length && stack[stack.length - 1] === 'S')) {
                stack.push('S');
            }

            continue;
        }

        if (stack.length && stack[stack.length - 1] === 'R') {
            stack.pop();
            collisions += 2;

            while (stack.length && stack[stack.length - 1] === 'R') {
                stack.pop();
                collisions++;
            }

            if (!(stack.length && stack[stack.length - 1] === 'S')) {
                stack.push('S');
            }
        } else if (stack.length && stack[stack.length - 1] === 'S') {
            collisions++;
        }
    }

    return collisions;
};
