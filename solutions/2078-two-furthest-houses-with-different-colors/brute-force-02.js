// time: O(n^2)
// space: O(n)

/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = colors => {
    const map = {};
    let result = 0;

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];

        map[color] ??= [];
        let k = 0;

        for (let j = 0; j < i; j++) {
            const a = k < map[color].length ? map[color][k] : Infinity;
            if (j < a) {
                result = Math.max(result, i - j);
                break;
            } else if (j === a) {
                k++;
            }
        }

        map[color].push(i);
    }

    return result;
};
