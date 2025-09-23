// time: O()
// space: O()

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
const minBitFlips = (start, goal) => {
    let result = 0;

    start = start.toString(2);
    goal = goal.toString(2);

    const slen = start.length;
    const glen = goal.length;

    const diff = Math.abs(slen - glen);

    if (slen > glen) goal = '0'.repeat(diff) + goal;
    if (glen > slen) start = '0'.repeat(diff) + start;

    for (let i = 0; i < start.length; i++) {
        const a = start[i];
        const b = goal[i];

        if (a !== b) result++;
    }

    return result;
};

