// time: O(n)
// space: O(n)

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = (colors, neededTime) => {
    const blocks = [];
    let i = 0,
        result = 0;
    while (i < colors.length) {
        const curr = colors[i];
        const block = [neededTime[i]];
        let count = 1;

        while (i + count < colors.length && curr === colors[i + count]) {
            block.push(neededTime[i + count]);
            count++;
        }

        i += count;
        if (block.length > 1) blocks.push(block);
    }

    for (const block of blocks) {
        let sum = 0;
        let max = -Infinity;

        for (const time of block) {
            sum += time;
            max = Math.max(max, time);
        }

        sum -= max;
        result += sum;
    }

    return result;
};
