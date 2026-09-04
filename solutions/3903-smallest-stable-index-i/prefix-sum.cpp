// time: O(n)
// space: O(n)

#include <algorithm>
#include <vector>

using namespace std;

class Solution {
  public:
    int firstStableIndex(vector<int> &nums, int k) {
        const int n = nums.size();
        int suffix[n];
        int mx = 0;

        suffix[n - 1] = nums[n - 1];
        for (int i = n - 2; i >= 0; i--) suffix[i] = min(suffix[i + 1], nums[i]);

        for (int i = 0; i < n; i++) {
            mx = max(mx, nums[i]);
            if (mx - suffix[i] <= k) return i;
        }

        return -1;
    }
};
