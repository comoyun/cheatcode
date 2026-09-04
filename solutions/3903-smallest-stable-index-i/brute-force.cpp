// time: O(n)
// space: O(1)

#include <algorithm>
#include <cmath>
#include <vector>

using namespace std;

class Solution {
  public:
    int firstStableIndex(vector<int> &nums, int k) {
        const int n = nums.size();
        int mx = 0;

        for (int i = 0; i < n; i++) {
            mx = max(mx, nums[i]);
            int mn = nums[i];
            for (int j = i; j < n; j++) mn = min(mn, nums[j]);

            if (mx - mn <= k) return i;
        }

        return -1;
    }
};
