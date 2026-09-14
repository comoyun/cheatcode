/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
    const [aLeftX, aBottomY, aRightX, aTopY] = rec1;
    const [bLeftX, bBottomY, bRightX, bTopY] = rec2;

    return (
        aLeftX < bRightX &&
        aTopY > bBottomY &&
        aRightX > bLeftX &&
        aBottomY < bTopY
    );
};
