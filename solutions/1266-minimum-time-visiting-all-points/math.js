// time: O(N)
// space: O(1)

/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = points => {
    let result = 0;

    for (let i = 1; i < points.length; i++) {
        const [prevX, prevY] = points[i - 1];
        const [curX, curY] = points[i];

        result += Math.max(
            Math.abs(curX - prevX), 
            Math.abs(curY - prevY)
        );
    }

    return result;
};

