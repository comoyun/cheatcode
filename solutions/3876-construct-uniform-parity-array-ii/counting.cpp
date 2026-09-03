#include <algorithm>
#include <vector>
using namespace std;

class Solution {
  public:
    bool uniformArray(vector<int> &nums1) {
        int evenMin = 0;
        int oddMin = 0;

        for (const int num : nums1) {
            if (num & 1) {
                if (oddMin == 0)
                    oddMin = num;
                else
                    oddMin = min(oddMin, num);
            } else {
                if (evenMin == 0)
                    evenMin = num;
                else
                    evenMin = min(evenMin, num);
            }
        }

        if (!evenMin || !oddMin || oddMin < evenMin) return true;
        return false;
    }
};
