// time: O(n)
// space: O(n)

class Trie {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (const char of word) curr = curr[char] ??= {};
        curr.isTerminal = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for (const char of word) {
            if (!(char in curr)) return false;
            curr = curr[char];
        }
        return curr.isTerminal === true;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            if (!(char in curr)) return false;
            curr = curr[char];
        }
        return true;
    }
}
