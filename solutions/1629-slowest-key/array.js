// time: O(n)
// space: O(1)

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = (releaseTimes, keysPressed) => {
    let prev = 0;
    let max = 0;
    let result;

    for (let i = 0; i < releaseTimes.length; i++) {
        const diff = releaseTimes[i] - prev;
        if (diff >= max) {
            result =
                diff > max
                    ? keysPressed[i]
                    : result > keysPressed[i]
                      ? result
                      : keysPressed[i];
            max = diff;
        }
        prev = releaseTimes[i];
    }

    return result;
};
