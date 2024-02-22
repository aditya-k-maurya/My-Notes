#include<iostream>
using namespace std;

void printBinary(int num)
{
  for (int i = 10; i >= 0; i--)
  {
    cout << ((num >> i) & 1);
  }
  cout << endl;
}

int main()
{
  // to set the character to upper or lower case or uppper case we can flip the 6th bit of the character
  char ch ='D';

  // to lower case ;
  ch = ch | (1 << 5);
  cout << ch << endl;

  // to upper case
  char up = 'a';
  up = up & ~(1 << 5);
  cout << up << endl;

  // shorter method;
  char ch1 = 'E', ch2 = 'b';
  ch1 |= ' '; // lowercase
  ch2 &= '_'; // Upper case
  cout << ch1 << " " << ch2<<endl;

  // to check if the number is power of two
  int n = 16;
  if(n & (n-1)){
    cout << "not power of two"<<endl;
  }else{
    cout << "power of two" << endl;
  }

  int a = 239, b = 345;
  // we can clear msb or lsb of number at certain position
  int pos = 3;

  // cearing lsb after pos 
  printBinary(a);
  a = a & ((1 << (pos )) - 1);
  printBinary(a);

  // clearing msb after pos
  printBinary(b);
  b = b & ~((1 << (pos)) - 1);
  printBinary(b);
  return 0;
}

