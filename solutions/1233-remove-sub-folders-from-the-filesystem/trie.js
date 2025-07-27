// time: O(nL)
// space: O(nL)

class Node {
    constructor(char = '') {
        this.char = char;
        this.isTerminal = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.trie = new Node();
    }

    insert(path) {
        let curr = this.trie;
        path = path.split('/');

        for (const p of path) {
            if (p === '') continue;
            curr.children[p] ??= new Node(p);
            curr = curr.children[p];
        }

        curr.isTerminal = true;
    }

    getParents() {
        const parents = [];
        const dfs = (node, path = '') => {
            if (node.isTerminal) {
                parents.push(path);
                return;
            }
            const children = node.children;
            for (const child in children)
                dfs(children[child], path + '/' + child);
        };
        dfs(this.trie);
        return parents;
    }
}

/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = folders => {
    const trie = new Trie();
    for (const folder of folders) trie.insert(folder);
    return trie.getParents();
};

