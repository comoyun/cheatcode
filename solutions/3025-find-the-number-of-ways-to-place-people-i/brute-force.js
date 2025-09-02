// time: O()
// space: O()

/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfPairs = points => {
    let ans = 0;

    points.forEach(([ax, ay], i) => {
        points.forEach(([bx, by], j) => {
            if (i === j) return;
            if (ax > bx || ay < by) return;

            const blocked = points.some(([cx, cy], k) => {
                if (k === i || k === j) return false;
                return ax <= cx && cx <= bx && by <= cy && cy <= ay;
            });

            if (!blocked) ans++;
        });
    });

    return ans;
};
