// time: O(1)
// space O(1)

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = turnedOn => {
    const leds = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
    const result = [];

    const dfs = (index, count, hours, minutes) => {
        if (hours > 11 || minutes > 59) return;
        if (count === turnedOn) {
            result.push(`${hours}:${minutes.toString().padStart(2, '0')}`);
            return;
        }
        if (index === leds.length) return;

        if (index < 4) dfs(index + 1, count + 1, hours + leds[index], minutes);
        else dfs(index + 1, count + 1, hours, minutes + leds[index]);

        dfs(index + 1, count, hours, minutes);
    };

    dfs(0, 0, 0, 0);
    return result;
};
