// time: O(n log n)
// space: O(1)

/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = points => {
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1;
    let prevEnd = points[0][1];
    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i];
        if (start > prevEnd) {
            arrows++;
            prevEnd = end;
        }
    }
    return arrows;
};
