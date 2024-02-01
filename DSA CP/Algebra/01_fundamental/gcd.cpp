// greatest common divisior

#include<iostream>
using namespace std;

// finding gcd of number in time complexity O(log(min(a,b)))
int gcd(int a, int b){
    if(b==0){
        return a;
    }
    return gcd(b, a%b);
}

int main()
{
    //gcd of the number is
    int gcdNum = gcd(45,9);
    cout<<gcdNum<<endl;
    return 0;
}