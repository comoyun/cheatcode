// time: O(n + m)
// space: O(min(n,m))

#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
  public:
    vector<int> intersect(vector<int> &nums1, vector<int> &nums2) {
        unordered_map<int, int> freq;
        vector<int> result;

        for (const int num : nums1) freq[num]++;
        for (const int num : nums2) {
            if (freq[num]) {
                result.push_back(num);
                freq[num]--;
            }
        }

        return result;
    }
};
