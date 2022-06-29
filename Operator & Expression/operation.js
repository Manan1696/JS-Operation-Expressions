//Add two Numbers
//Qs 1. You are provided with two numbers A and B. Your task is to add these two numbers.
//Ans- 

const AddTwoNumbers = (a,b) => {
    return (a+b);
};


// Find if the conditions are obeyed or not?
//Qs 2. You are given two number first as A and second as B and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.
//Ans-

const Is_Valid = (a,b) => {
    return(a < 10 && a > b)
  };
  

// Check the conditons
// Qs 3. You are given two numbers Aand B. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
//Ans -





// Find the first digit of a 4 digit number
// Qs 4. You are provided a four digit number N only. Your task is to print out the first digit of that number.
//Ans - 

const First_Digit = (n) => {
    return parseInt(n/1000);
 };



// Find the last digit of a 4 digit number
// Qs 5. You are provided a four digit number N only. Your task is to print out the last digit of that number.
//Ans - 

const Last_Digit = (n) => {
    return(n % 10);
 };



// Find the remainder
// Qs 6. You are provided with two numbers Aand Bwhere A
//as  divisor and B as  dividend.Your task is find the remainder.
//Ans

const Find_the_remainder = (a,b) => {
    return(b % a)
};


// Multipy two Numbers
// Qs 7. You are provided with two numbers Aand B. Your task is to multiply these two numbers.
//Ans

const Multiply_two_number = (a,b) => {
    return(a*b);
};



// Marks Calculator
// Qs 8. Shyam has got his marks in three subjects as A, B, and C (out of 100).
// Write a program to calculate his total marks and his average.
//Ans

const Sum = (A, B, C) => 
{
 return(A + B + C)
};

const Average = (A, B, C) => 
{
 return((A + B + C)/ 3)
};