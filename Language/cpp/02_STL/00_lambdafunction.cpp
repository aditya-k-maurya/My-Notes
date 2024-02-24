#include <bits/stdc++.h>
using namespace std;

int main()
{
  vector<int> v = {2, 3, 5, 3, 4};

  //lambda function
  auto sum = [](int x,int y){ return x + y; };
  cout << sum(5,3);

  // all of

  return 0;
}