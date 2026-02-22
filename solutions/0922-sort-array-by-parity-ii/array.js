// time: O(n)
// space: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParityII = nums => {
    let even = 0;
    let odd = 1;

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        while (curr & 1 && !(i & 1)) {
            [nums[odd], nums[i]] = [nums[i], nums[odd]];
            odd += 2;
            curr = nums[i];
        }

        while (!(curr & 1) && i & 1) {
            [nums[even], nums[i]] = [nums[i], nums[even]];
            even += 2;
            curr = nums[i];
        }
    }

    return nums;
};
