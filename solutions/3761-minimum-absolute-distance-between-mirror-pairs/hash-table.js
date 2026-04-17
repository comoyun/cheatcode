// time: O(n * d)
// space: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
const minMirrorPairDistance = nums => {
    const map = {};
    let result = Infinity;

    const reverse = num => {
        let result = 0;
        while (num) {
            result *= 10;
            result += num % 10;
            num = Math.floor(num / 10);
        }

        return result;
    };

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const rev = reverse(num);

        if (rev in map) result = Math.min(result, map[rev] - i);
        map[num] = i;
    }

    return result === Infinity ? -1 : result;
};

