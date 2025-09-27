// time: O(n^3)
// space: O(1)

/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = points => {
    let max = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const [ax, ay] = points[i];
                const [bx, by] = points[j];
                const [cx, cy] = points[k];

                const area =
                    Math.abs(ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) /
                    2;

                if (area > max) max = area;
            }
        }
    }

    return max;
};

