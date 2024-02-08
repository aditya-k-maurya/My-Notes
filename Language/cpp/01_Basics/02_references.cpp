#include <iostream>
using namespace std;
void swap(int &a, int &b)
{
  // passed by reference
  int temp = a;
  a = b;
  b = temp;
}

void array(int arr[][20], int n){
  // in multidimentional array 2nd parameter is necessary to be passed;
  // some code;
}

int main()
{
  // passing value by reference will not create copy of the datatyp
  // it will make changes in the same
  // array is passed by reference only

  int a = 13;
  int b = 32;
  swapp(a, b);

  //passing array
  int arr[10][20];
  array(arr, 10);


  return 0;
}