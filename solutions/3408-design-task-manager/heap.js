// time: O()
// space: O()

class MyHeap {
    constructor(comparator = (a, b) => a - b) {
        this.heap = [];
        this.compare = comparator;
        this.pos = new Map();
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.size() ? this.heap[0] : null;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        this.pos.set(this.heap[i][1], i);
        this.pos.set(this.heap[j][1], j);
    }

    insert(val) {
        this.heap.push(val);
        this.pos.set(val[1], this.size() - 1);
        this.heapifyUp(this.size() - 1);
    }

    heapifyUp(idx) {
        let cur = idx;
        while (cur > 0) {
            let par = Math.floor((cur - 1) / 2);
            if (this.compare(this.heap[cur], this.heap[par]) > 0) {
                this.swap(cur, par);
                cur = par;
                continue;
            }
            break;
        }
    }

    heapifyDown(idx) {
        let cur = idx;
        while (true) {
            let left = cur * 2 + 1,
                right = cur * 2 + 2,
                largest = cur;

            if (
                left < this.size() &&
                this.compare(this.heap[left], this.heap[largest]) > 0
            )
                largest = left;
            if (
                right < this.size() &&
                this.compare(this.heap[right], this.heap[largest]) > 0
            )
                largest = right;
            if (largest === cur) break;

            this.swap(cur, largest);
            cur = largest;
        }
    }

    remove() {
        if (!this.size()) return null;
        if (this.size() === 1) {
            const item = this.heap.pop();
            this.pos.delete(item[1]);
            return item;
        }

        const removed = this.heap[0];
        this.swap(0, this.size() - 1);
        const popped = this.heap.pop();
        this.pos.delete(removed[1]);
        if (this.size()) this.heapifyDown(0);
        return removed;
    }

    removeAt(i) {
        const removed = this.heap[i];
        this.swap(i, this.size() - 1);
        this.heap.pop();
        this.pos.delete(removed[1]);
        if (i < this.size()) {
            this.heapifyDown(i);
            this.heapifyUp(i);
        }
        return removed;
    }

    updatePriority(i, newPriority) {
        this.heap[i][2] = newPriority;
        this.heapifyDown(i);
        this.heapifyUp(i);
    }

    heapify(arr) {
        this.heap = [...arr];
        this.pos.clear();
        for (let i = 0; i < this.heap.length; i++) {
            this.pos.set(this.heap[i][1], i);
        }
        for (let i = Math.floor((this.size() - 2) / 2); i >= 0; i--)
            this.heapifyDown(i);
    }

    replace(val) {
        if (!this.size()) return null;
        const removed = this.heap[0];
        this.heap[0] = val;
        this.pos.set(val[1], 0);
        this.heapifyDown(0);
        return removed;
    }

    clear() {
        this.heap = [];
        this.pos.clear();
    }

    contains(val) {
        return this.pos.has(val[1]);
    }
}

class TaskManager {
    /**
     * @param {number[][]} tasks
     */
    constructor(tasks) {
        this.heap = new MyHeap((a, b) => {
            if (a[2] !== b[2]) return a[2] - b[2];
            return a[1] - b[1];
        });
        this.heap.heapify(tasks);
    }

    /**
     * @param {number} userId
     * @param {number} taskId
     * @param {number} priority
     * @return {void}
     */
    add(userId, taskId, priority) {
        this.heap.insert([userId, taskId, priority]);
    }

    /**
     * @param {number} taskId
     * @param {number} newPriority
     * @return {void}
     */
    edit(taskId, newPriority) {
        const i = this.heap.pos.get(taskId);
        if (i !== undefined) this.heap.updatePriority(i, newPriority);
    }

    /**
     * @param {number} taskId
     * @return {void}
     */
    rmv(taskId) {
        const i = this.heap.pos.get(taskId);
        if (i !== undefined) this.heap.removeAt(i);
    }

    /**
     * @return {number}
     */
    execTop() {
        const removed = this.heap.remove();
        if (removed) return removed[0];
        return -1;
    }
}
