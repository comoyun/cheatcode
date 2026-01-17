// time: O(N * N)
// space: O(1)

/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 */
const largestSquareArea = (bottomLeft, topRight) => {
    const n = bottomLeft.length;
    let result = 0;

    const collide = (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) => {
        return !(p2x <= p3x || p1x >= p4x || p2y <= p3y || p1y >= p4y);
    };

    for (let i = 0; i < n - 1; i++) {
        const [p1x, p1y] = bottomLeft[i];
        const [p2x, p2y] = topRight[i];
        for (let j = i + 1; j < n; j++) {
            const [p3x, p3y] = bottomLeft[j];
            const [p4x, p4y] = topRight[j];
            if (collide(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y)) {
                const w = Math.min(p2x, p4x) - Math.max(p1x, p3x);
                const h = Math.min(p2y, p4y) - Math.max(p1y, p3y);
                const min = Math.min(w, h);
                result = Math.max(result, min * min);
            }
        }
    }

    return result;
};

