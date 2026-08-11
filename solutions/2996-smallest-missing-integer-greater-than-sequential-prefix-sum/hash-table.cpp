// time: O(n)
// space: O(n)

#include <unordered_set>
#include <vector>

using namespace std;

class Solution {
  public:
    int missingInteger(vector<int> nums) {
        unordered_set<int> s(nums.begin(), nums.end());

        const int n = nums.size();
        int result = nums[0];

        for (int i = 1; i < n; i++) {
            const int prev = nums[i - 1];
            const int curr = nums[i];

            if (curr - prev != 1) break;

            result += curr;
        }

        while (s.find(result) != s.end()) result++;

        return result;
    }
};
