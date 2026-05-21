// time: O(n * d + m * d)
// space: O(n * d)

class Node {
    constructor() {
        this.children = new Array(10).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(num, i = 0, cur = this.root) {
        if (i >= num.length) return;

        const digit = num[i];

        if (!cur.children[digit]) cur.children[digit] = new Node();

        this.insert(num, i + 1, cur.children[digit]);
    }

    prefixLen(num, i = 0, cur = this.root) {
        if (i >= num.length) return 0;

        if (!cur.children[num[i]]) return 0;

        return 1 + this.prefixLen(num, i + 1, cur.children[num[i]]);
    }
}

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const longestCommonPrefix = (arr1, arr2) => {
    const trie = new Trie();
    let result = 0;

    for (const num of arr1) trie.insert(num.toString());
    for (const num of arr2)
        result = Math.max(result, trie.prefixLen(num.toString()));
    return result;
};

