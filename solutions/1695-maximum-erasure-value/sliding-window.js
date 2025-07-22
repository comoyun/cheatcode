// time: O(n)
// space: O(n)

const maximumUniqueSubarray = nums => {
    const set = new Set();
    let left = 0,
        right = 0;
    let sum = 0;
    let result = 0;

    for (; right < nums.length; right++) {
        const num = nums[right];
        while (set.has(num)) {
            const rem = nums[left++];
            sum -= rem;
            set.delete(rem);
        }
        sum += num;
        result = Math.max(result, sum);
        set.add(num);
    }

    return result;
};

