// time: O(n)
// space: O(n)

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = asteroids => {
    const stack = [];
    for (let asteroid of asteroids) {
        let add = true;
        while (stack.length && stack.at(-1) > 0 && asteroid < 0) {
            if (Math.abs(asteroid) > stack.at(-1)) {
                stack.pop();
                continue;
            }
            if (Math.abs(asteroid) === stack.at(-1)) {
                stack.pop();
                add = false;
                break;
            }
            if (Math.abs(asteroid) < stack.at(-1)) {
                add = false;
                break;
            }
        }
        if (add) stack.push(asteroid);
    }
    return stack;
};
