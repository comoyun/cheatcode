// time: O(n)
// space: O(1)

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
const areaOfMaxDiagonal = dimensions => {
    let result = 0;
    let max = 0;

    for (const [height, width] of dimensions) {
        const diagonal = Math.hypot(height, width);
        const area = width * height;

        if (diagonal === max) result = Math.max(result, area);
        else if (diagonal > max) result = area;

        max = Math.max(max, diagonal);
    }

    return result;
};

