// the fibonacci number n is sum of previous 2 number
// fib series 0 1 1 2 3 5 8 13 ...

#include<iostream>
using namespace std;

//finding fibonacci using recursion
long fib(int n){

    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }

    return fib(n-1) + fib(n-2);
}

int main()
{
    int n;
    cout<<"Enter a number to find its finbonacci:"<<endl;
    cin>>n;
    long fibN = fib(n);
    cout<<fibN<<endl;

    return 0;
}