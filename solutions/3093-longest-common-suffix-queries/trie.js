// time: O(c + q)
// space: O(c)

class Node {
    constructor(idx) {
        this.idx = idx;
        this.children = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new Node(0);
    }

    insertReverse(word, idx, words) {
        let curr = this.root;
        if (word.length < words[curr.idx].length) curr.idx = idx;

        for (let i = word.length - 1; i >= 0; i--) {
            const j = word.charCodeAt(i) - 97;

            if (curr.children[j] === null) curr.children[j] = new Node(idx);
            if (word.length < words[curr.children[j].idx].length)
                curr.children[j].idx = idx;

            curr = curr.children[j];
        }
    }

    longestSuffix(query) {
        let curr = this.root;

        for (let i = query.length - 1; i >= 0; i--) {
            const j = query.charCodeAt(i) - 97;

            if (curr.children[j] === null) break;
            curr = curr.children[j];
        }

        return curr.idx;
    }
}

/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
const stringIndices = (wordsContainer, wordsQuery) => {
    const trie = new Trie();

    for (let i = 0; i < wordsContainer.length; i++)
        trie.insertReverse(wordsContainer[i], i, wordsContainer);

    return wordsQuery.map(q => trie.longestSuffix(q));
};

