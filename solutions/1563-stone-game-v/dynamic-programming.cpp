#include <algorithm>
#include <cstring>
#include <vector>
using namespace std;

class Solution {
  public:
    int memo[505][505];
    int prefix[505];

    int dfs(int left, int right) {
        if (left == right) return 0;

        if (memo[left][right] != -1) return memo[left][right];

        int result = 0;

        for (int i = left; i < right; i++) {
            int leftSum = prefix[i] - (left > 0 ? prefix[left - 1] : 0);
            int rightSum = prefix[right] - prefix[i];

            if (leftSum < rightSum) {
                result = max(result, leftSum + dfs(left, i));
            } else if (rightSum < leftSum) {
                result = max(result, rightSum + dfs(i + 1, right));
            } else {
                result = max(result, leftSum + dfs(left, i));
                result = max(result, rightSum + dfs(i + 1, right));
            }
        }

        return memo[left][right] = result;
    }

    int stoneGameV(vector<int> stones) {
        int n = stones.size();

        memset(memo, -1, sizeof(memo));

        prefix[0] = stones[0];
        for (int i = 1; i < n; i++) prefix[i] = prefix[i - 1] + stones[i];

        return dfs(0, n - 1);
    }
};
