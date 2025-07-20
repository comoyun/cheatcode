/*
 * @title: Trie
 * @time: O(n)
 * @space: O(n)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.children = {};
        this.deleted = false;
    }
}

class Trie {
    constructor() {
        this.trie = new Node('');
    }

    insert(path) {
        let curr = this.trie;
        for (const folder of path) {
            curr.children[folder] ??= new Node(folder);
            curr = curr.children[folder];
        }
    }

    countAndMark() {
        const freq = new Map();

        const serialize = node => {
            if (!node) return '';

            const parts = [];
            for (const [childName, child] of Object.entries(node.children)) {
                const rep = serialize(child);
                parts.push(childName + (rep ? `(${rep})` : ''));
            }

            const signature = parts.sort().join('');
            if (signature) {
                freq.set(signature, (freq.get(signature) || 0) + 1);
                node.sig = signature; 
            }

            return signature;
        };

        serialize(this.trie);

        const mark = node => {
            for (const child of Object.values(node.children)) {
                if (child.sig && freq.get(child.sig) >= 2) {
                    child.deleted = true;
                    continue;
                }
                mark(child);
            }
        };

        mark(this.trie);
    }

    collect() {
        const result = [];

        const dfs = (node, path) => {
            for (const [name, child] of Object.entries(node.children)) {
                if (child.deleted) continue;
                const newPath = [...path, name];
                result.push(newPath);
                dfs(child, newPath);
            }
        };

        dfs(this.trie, []);
        return result;
    }
}

/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
const deleteDuplicateFolder = paths => {
    const trie = new Trie();
    for (const path of paths) trie.insert(path);
    trie.countAndMark();
    return trie.collect();
};
