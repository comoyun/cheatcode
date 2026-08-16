#include <cstdlib>
#include <vector>
using namespace std;

class Solution {
  public:
    bool stoneGameIX(vector<int> stones) {
        int mod[3] = {};

        for (const int num : stones) mod[num % 3]++;
        if (mod[0] % 2 == 0) return mod[1] > 0 && mod[2] > 0;

        return abs(mod[1] - mod[2]) > 2;
    }
};
