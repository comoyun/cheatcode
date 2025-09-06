// time: O()
// space: O()

/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = nums => {
    let max = 0;
    let result = Infinity;

    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in map) {
            map[num][1] = i;
            map[num][2]++;
        } else {
            map[num] = [i, i, 1]; 
        }
    }

    for (const [_, [first, last, count]] of Object.entries(map)) {
        if (count > max) {
            max = count;
            result = last - first + 1;
        } else if (count === max) {
            result = Math.min(result, last - first + 1);
        }
    }

    return result;
};
