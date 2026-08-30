#include <algorithm>
#include <vector>

using namespace std;

class Solution {
  public:
    int minimumDeletions(vector<int> nums) {
        const int n = nums.size();
        int mn = 0;
        int mx = 0;

        for (int i = 0; i < n; i++) {
            if (nums[i] < nums[mn]) mn = i;
            if (nums[i] > nums[mx]) mx = i;
        }

        if (mn > mx) {
            mx ^= mn;
            mn ^= mx;
            mx ^= mn;
        }

        return min(mn + 1 + n - mx, min(mx + 1, n - mn));
    }
};
