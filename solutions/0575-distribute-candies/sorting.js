// time: O(n log n)
// space: O(1)

/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = candyType => {
    const n = candyType.length;
    candyType.sort((a, b) => a - b);

    let unique = 0;

    for (let i = 0; i < n; i++)
        if (i === 0 || candyType[i - 1] !== candyType[i]) 
            unique++;

    return Math.min(n / 2, unique);
};
