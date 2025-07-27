// time: O(n log n + mn)
// space: O(n)

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = (products, searchWord) => {
    const result = [];
    products.sort();

    for (let i = 0; i < searchWord.length; i++) {
        const prefix = searchWord.slice(0, i + 1);
        const words = [];
        for (const product of products) {
            if (product.startsWith(prefix)) words.push(product);
            if (words.length === 3) break;
        }
        result.push(words);
    }

    return result;
};
