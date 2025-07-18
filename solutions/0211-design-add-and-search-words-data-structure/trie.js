/*
 * @title: Trie
 * @time: O(n) for addWord, O(26^n) for search (with wildcards)
 * @space: O(n) 
 */

class Node {
    constructor(char) {
        this.char = char;
        this.isTerminal = false;
        this.children = new Array(26);
    }
}

class WordDictionary {
    constructor() {
        this.trie = new Node();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.trie;
        let idx = 0;
        while (idx < word.length) {
            const char = word[idx++];
            const code = char.charCodeAt(0) - 97;
            curr.children[code] ??= new Node(char);
            curr = curr.children[code];
        }
        curr.isTerminal = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (curr, idx) => {
            if (idx === word.length) return curr.isTerminal;
            const char = word[idx];
            const children = curr.children;
            const code = char.charCodeAt(0) - 97;

            if (char === '.') {
                for (const child of children)
                    if (child && dfs(child, idx + 1)) return true;
                return false;
            }

            if (!children[code]) return false;
            return dfs(children[code], idx + 1);
        };
        return dfs(this.trie, 0);
    }
}
