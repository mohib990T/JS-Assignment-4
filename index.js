// Q1 Find the number of digits
// Take a number from the user and print the count of digits in that number.

// function find_digit(num) {
//   if (num > 10000) {
//     console.log("Please enter the number less than 10000.");
//   } else {
//     let count = 0;
//     while (num != 0) {
//       num = Math.floor(num / 10);
//       ++count;
//     }
//     console.log(count);
//   }
// }
// find_digit(+prompt("Enter the number : "));
// ----------------------------------------------------------------------------------

// Q2 Find the Fives.
// Among all the digits from 0−9, PrepBuddy likes number 5.
// He has a number and wants you to find out the number of times 5 occurred in the given number.

// let n = +prompt("Enter a number less than 10000000 : ");
// let count = 0;
// if (n <= 10000000) {
//   for (let i = n; i > 0; i = Math.floor(i / 10)) {
//     if (i % 10 == 5) count++;
//   }
//   console.log(count);
// } else {
//   console.log("Please enter a no. less than 10000000");
// }
// -------------------------------------------------------------------------------------------------------

// Q3 Find Sum
// You are given an integer N, and your task is to find the sum of all the even integers
// starting from 1 upto N (N inclusive).

// let N = +prompt("Enter a number N");
// let sum_even = 0;
// if (N <= 500) {
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//       sum_even = sum_even + i;
//     }
//   }
//   console.log(sum_even);
// } else {
//   console.log("Please enter no. less than 500");
// }
// ------------------------------------------------------------------------------------------------------

// Q4 Find the sum of the digits of a given number.
// Write a program that takes a number from the user and
// get the sum of the digits present in the number.

let num = +prompt("Enter a number : ");
let sum = 0;
if (num <= 10000) {
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let rem = i % 10;
    sum = sum + rem;
  }
  console.log(sum);
} else {
  console.log("Please Enter no. less than 10000");
}

// --------------------------------------------------------------------------------------------

// Q5 Print the Odds.
// Write a program which takes a number from user and print all odd numbers in between 2 and N,
// but print 2 first.

//   let N = +prompt("Enter a number N >= 2 ");
//   console.log(2);
//   for (let i = 2; i <= N; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// -----------------------------------------------------------------------------------------------------------

// Q6 Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik.

//   let n = +prompt("Enter a number ");
//   let star = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       star += "*";
//     }
//     star += "\n";
//   }
//   console.log(star);
// -------------------------------------------------------------------------------------------------

// Q7 Check whether a Number is a prime or not.
// Write a program which takes a number from user and
// check whether number is prime number or not a prime number.

// const number = +(prompt("Enter a positive number: "));
// let isPrime = true;

// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// } else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(number + " is a prime number");
//     } else {
//         console.log(number + " is not a prime number");
//     }
// } else {
//     console.log("The number is not a prime number.");
// }
// ----------------------------------------------------------------------------------------

// Q8 Print Numbers
// You are given an integer N, and your task is to print all the integers
// starting from 1 till N (N inclusive).

// let n = +prompt("Enter a number: ");
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }
// ------------------------------------------------------------------------------------------

// Q9 Print the Table
// Write a program which takes a number from user and print the table.

// let n = +prompt("Enter a number");
// for (let i = 1; i <= 10; i++) {
//   let = table = n + " * " + i + " = " + n * i;
//   console.log(table);
// }
