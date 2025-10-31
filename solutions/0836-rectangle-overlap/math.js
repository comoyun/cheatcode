// time: O(1)
// space: O(1)

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
    const [x1, y1, x2, y2] = rec1;
    const [xt1, yt1, xt2, yt2] = rec2;

    if (x1 < xt2 && x2 > xt1 && y1 < yt2 && y2 > yt1) return true;

    return false;
};

