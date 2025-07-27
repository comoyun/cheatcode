// time: O(2 ^ n)
// space: O(2 ^ n)

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = s => {
    const result = [];

    const isPalindrome = str => {
        let left = 0,
            right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    const dfs = (remaining, path) => {
        if (remaining === '') {
            result.push([...path]);
            return;
        }

        for (let i = 1; i <= remaining.length; i++) {
            const prefix = remaining.slice(0, i);
            if (isPalindrome(prefix)) {
                dfs(remaining.slice(i), [...path, prefix]);
            }
        }
    };

    dfs(s, []);
    return result;
};
