// Vector are like dynamic array

#include <bits/stdc++.h>
using namespace std;

int main()
{
  // initialization
  vector<int> v(4, 0);

  return 0;
}

/*
vector useful methods


v.size()   -> size of vector

v.empty()   -> return true or false if vector is empty

v.push_back()   -> insert elemennt at end

v.pop_back()   -> insert element in begin

v.insert(pos, value)  -> insert value at position

v.erase(pos, value)  -> erase value on position

auto newVec = unique(v.begin(), v.end());  -> return vector with unique elements

sort(v.begin(), v.end(), greater<int>);  -> return sorted vector
*/