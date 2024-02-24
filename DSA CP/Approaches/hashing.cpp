/*
Hashing is used when we precompute data and use that info so we dont have to find the result again and again unnecessarily
eg- factorial of number 
eg- fibonacci number
*/

int arr[100001];


#include<iostream>
using namespace std;

int main()
{ 
  //precomputation
  long ans = 1;
  int m = 1000000007;
  for (int i = 1; i < 100001;i++){
    arr[i] = ans * i%m;
    ans = arr[i];
  }

    // find factorial of number n in modulo 10^9 + 7
    int n;
  cin >> n;
  factorial(n)
  return 0;
}