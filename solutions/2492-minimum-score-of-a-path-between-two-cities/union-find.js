// time: O(n + e)
// space: O(n)

class UnionFind {
    constructor(n) {
        this.par = new Map();
        this.rank = new Map();

        for (let i = 1; i < n + 1; i++) {
            this.par.set(i, i);
            this.rank.set(i, 0);
        }
    }

    find(n) {
        let p = this.par.get(n);
        while (p != this.par.get(p)) {
            this.par.set(p, this.par.get(this.par.get(p)));
            p = this.par.get(p);
        }
        return p;
    }

    union(n1, n2) {
        let p1 = this.find(n1),
            p2 = this.find(n2);
        if (p1 == p2) {
            return false;
        }

        if (this.rank.get(p1) > this.rank.get(p2)) {
            this.par.set(p2, p1);
        } else if (this.rank.get(p1) < this.rank.get(p2)) {
            this.par.set(p1, p2);
        } else {
            this.par.set(p1, p2);
            this.rank.set(p2, this.rank.get(p2) + 1);
        }
        return true;
    }
}

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = (n, roads) => {
    let result = Infinity;
    const uf = new UnionFind(n);

    for (const [a, b] of roads) uf.union(a, b);
    for (const [a, b, distance] of roads)
        if (uf.find(a) === uf.find(1)) result = Math.min(result, distance);
    return result;
};
