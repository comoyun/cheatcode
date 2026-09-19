// time: O(1)
// space: O(1)

/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
const checkOverlap = (radius, xCenter, yCenter, x1, y1, x2, y2) => {
    const clamp = (a, b, c) => Math.max(a, Math.min(b, c));

    if (y2 < y1) [y1, y2] = [y2, y1];
    if (x2 < x1) [x1, x2] = [x2, x1];

    const x = clamp(x1, x2, xCenter);
    const y = clamp(y1, y2, yCenter);

    dist = Math.sqrt(Math.pow(xCenter - x, 2) + Math.pow(yCenter - y, 2));

    return dist <= radius;
};
