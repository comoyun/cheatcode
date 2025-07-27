// time: O(n)
// space: O(n)

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let curr = this.root;
        for (const char of word) curr = curr[char] ??= {};
        curr.isTerminal = true;
    }

    search(word) {
        let curr = this.root;
        for (const char of word) {
            if (!(char in curr)) return false;
            curr = curr[char];
        }

        return curr.isTerminal === true;
    }

    getNodeWithPrefix(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            if (!(char in curr)) return {};
            curr = curr[char];
        }

        return curr;
    }

    getWordsWithPrefix(prefix) {
        const result = [];

        const dfs = (node, word = prefix) => {
            if (result.length >= 3) return;

            if (node.isTerminal === true) result.push(word);

            const keys = Object.keys(node)
                .filter(k => k !== 'isTerminal')
                .sort();

            for (const key of keys) dfs(node[key], word + key);
        };

        dfs(this.getNodeWithPrefix(prefix));
        return result;
    }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = (products, searchWord) => {
    const trie = new Trie();
    const result = [];
    let prefix = '';
    for (const product of products) trie.insert(product);
    for (const char of searchWord) {
        prefix += char;
        result.push(trie.getWordsWithPrefix(prefix));
    }

    return result;
};
