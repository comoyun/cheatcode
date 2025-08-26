// time: O(n)
// space: O(1)

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
const areaOfMaxDiagonal = dimensions => {
    let bestArea = 0;
    let maxDiagonal = 0;

    for (const [h, w] of dimensions) {
        // Get the diagonal length
        const diagonal = Math.hypot(h, w);
        // Compute rectangle area
        const area = h * w;

        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal; // We found a longer diagonal
            bestArea = area; // So this is our new best area (note that it can be smaller than what it was before)
        } else if (diagonal === maxDiagonal) {
            // Same longest diagonal so we pick the bigger area.
            bestArea = Math.max(bestArea, area);
        }
    }

    return bestArea;
};
