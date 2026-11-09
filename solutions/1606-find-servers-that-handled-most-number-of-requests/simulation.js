// time: O(k log k + n log k)
// space: O(k)

class MyHeap {
    constructor(comparator) {
        this.compare = comparator;
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let idx = this.size - 1;
        let parent = (idx - 1) >> 1;

        while (idx > 0 && this.compare(this.heap[idx], this.heap[parent]) < 0) {
            [this.heap[idx], this.heap[parent]] = [
                this.heap[parent],
                this.heap[idx],
            ];
            idx = parent;
            parent = (idx - 1) >> 1;
        }
    }

    pop() {
        if (this.size < 2) return this.heap.pop();
        const rem = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return rem;
    }

    heapifyDown() {
        let idx = 0;
        let left = idx * 2 + 1;
        let right = idx * 2 + 2;

        while (left < this.size) {
            let min = idx;
            if (this.compare(this.heap[min], this.heap[left]) > 0) min = left;
            if (
                right < this.size &&
                this.compare(this.heap[min], this.heap[right]) > 0
            )
                min = right;
            if (min === idx) break;
            [this.heap[min], this.heap[idx]] = [this.heap[idx], this.heap[min]];
            idx = min;
            left = idx * 2 + 1;
            right = idx * 2 + 2;
        }
    }

    get size() {
        return this.heap.length;
    }

    get top() {
        return this.size && this.heap[0];
    }
}

class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    height(node) {
        return node?.height ?? 0;
    }

    updateHeight(node) {
        node.height =
            1 + Math.max(this.height(node.left), this.height(node.right));
    }

    balanceFactor(node) {
        return this.height(node.left) - this.height(node.right);
    }

    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    rebalance(node) {
        this.updateHeight(node);

        const balance = this.balanceFactor(node);

        if (balance > 1) {
            if (this.balanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }

            return this.rotateRight(node);
        }

        if (balance < -1) {
            if (this.balanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }

            return this.rotateLeft(node);
        }

        return node;
    }

    add(value) {
        const result = this._insert(this.root, value);
        this.root = result.node;

        if (result.inserted) {
            this.size++;
        }

        return result.inserted;
    }

    _insert(node, value) {
        if (!node) {
            return {
                node: new AVLNode(value),
                inserted: true,
            };
        }

        if (value === node.value) {
            return { node, inserted: false };
        }

        let result;

        if (value < node.value) {
            result = this._insert(node.left, value);
            node.left = result.node;
        } else {
            result = this._insert(node.right, value);
            node.right = result.node;
        }

        if (!result.inserted) {
            return { node, inserted: false };
        }

        return {
            node: this.rebalance(node),
            inserted: true,
        };
    }

    has(value) {
        let node = this.root;

        while (node) {
            if (value === node.value) return true;

            node = value < node.value ? node.left : node.right;
        }

        return false;
    }

    lowerBound(value) {
        let node = this.root;
        let candidate = undefined;

        while (node) {
            if (node.value >= value) {
                candidate = node.value;
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return candidate;
    }

    upperBound(value) {
        let node = this.root;
        let candidate = undefined;

        while (node) {
            if (node.value > value) {
                candidate = node.value;
                node = node.left;
            } else {
                node = node.right;
            }
        }

        return candidate;
    }

    delete(value) {
        const result = this._delete(this.root, value);
        this.root = result.node;

        if (result.deleted) {
            this.size--;
        }

        return result.deleted;
    }

    _delete(node, value) {
        if (!node) {
            return { node: null, deleted: false };
        }

        let result;

        if (value < node.value) {
            result = this._delete(node.left, value);
            node.left = result.node;
        } else if (value > node.value) {
            result = this._delete(node.right, value);
            node.right = result.node;
        } else {
            if (!node.left) {
                return { node: node.right, deleted: true };
            }

            if (!node.right) {
                return { node: node.left, deleted: true };
            }

            const successor = this.minNode(node.right);
            node.value = successor.value;

            result = this._delete(node.right, successor.value);
            node.right = result.node;

            return {
                node: this.rebalance(node),
                deleted: true,
            };
        }

        if (!result.deleted) {
            return { node, deleted: false };
        }

        return {
            node: this.rebalance(node),
            deleted: true,
        };
    }

    minNode(node) {
        while (node.left) {
            node = node.left;
        }

        return node;
    }

    toArray() {
        const result = [];

        const traverse = node => {
            if (!node) return;

            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };

        traverse(this.root);

        return result;
    }
}

/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
const busiestServers = (k, arrival, load) => {
    // we have k servers, named from 0 to k - 1
    // arrival[i] is the arrival time of the i-th task
    // each task is assigned to (i % k)th server (or first available server later i)
    // each task takes load[i] time to process

    // using heap, we can get earliest finishing servers
    // if their finishing time is earlier than current arrival time, it needs to be
    // removed from heap immediately and the corresponding server made available (like leetcode 1882)

    // we need a data structure that stores available servers and allows us to efficiently find
    // the lowest index server >= i. If that doesn't exist, then lowest index server >= 0. If that
    // doesn't exist, then task should be ignored

    // each time a server becomes busy, we increment its counter
    // and return server ids who received maximum number of requests

    // we may use ordered set to store available servers

    const available = new AVLTree();
    const result = [];
    const heap = new MyHeap((a, b) => a[1] - b[1]);
    const counter = new Array(k).fill(0);
    let max = 0;

    for (let i = 0; i < k; i++) available.add(i);

    const markBusy = server => {
        counter[server]++;

        if (max < counter[server]) {
            max = counter[server];
            result.length = 0;
        }

        if (max === counter[server]) result.push(server);

        available.delete(server);
    };

    const markFree = server => {
        available.add(server);
    };

    const getAvailableServer = id => {
        const server = available.lowerBound(id);

        if (server === undefined) {
            const server = available.lowerBound(0);
            if (server === undefined) return -1;
            return server;
        }

        return server;
    };

    for (let i = 0; i < arrival.length; i++) {
        const at = arrival[i];
        const duration = load[i];

        while (heap.size && heap.top[1] <= at) markFree(heap.pop()[0]);

        const server = getAvailableServer(i % k);

        if (server === -1) continue;

        heap.push([server, at + duration]);
        markBusy(server);
    }

    return result;
};

