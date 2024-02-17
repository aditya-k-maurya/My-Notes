// pairs store pair values

#include <bits/stdc++.h>
using namespace std;

int main()
{
  pair<int, string> p(2, "aditya");

  // pair inside vector
  vector<pair<int, int>>v; // now this vector stores pairs

  v.push_back(p); // pair is added in vector

  return 0;
}

//  p.first to access first element
// p.second to access second element
// we can also compare two pairs by "=="
