#include <iostream>
using namespace std;

int main()
{
  // pointer stores the address of the datatype
  int a = 34;
  int *p = &a; // initializing pointer
  cout << p << endl; //output address of a
  cout << *p << endl; // output value at a;

  int **pp = &p; // stores address of pointer
  cout<<*pp<<endl; value at p;
  cout<<**pp<<endl;
  value at a;
  return 0;
}