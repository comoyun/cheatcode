// time: O(n log n n + m)
// space: O(n)

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = (products, searchWord) => {
    products.sort();
    const result = [];
    let left = 0,
        right = products.length - 1;
    let prefix = '';

    for (const char of searchWord) {
        prefix += char;

        while (left <= right && !products[left].startsWith(prefix)) left++;
        while (left <= right && !products[right].startsWith(prefix)) right--;

        const words = [];
        for (let i = left; i <= Math.min(left + 2, right); i++)
            words.push(products[i]);

        result.push(words);
    }

    return result;
};
