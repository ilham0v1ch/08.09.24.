'use strict'

// № 12
let num1 = 28, num2 = 17, num3 = 19, num4 = 22, num5 = 12;
let bigNumber = num1;

if (num2 > bigNumber) bigNumber = num2;
if (num3 > bigNumber) bigNumber = num3;
if (num4 > bigNumber) bigNumber = num4;
if (num5 > bigNumber) bigNumber = num5;

alert("Eng kattasi: " + bigNumber);

// № 13
let a = 319, b = 879, c = 119;

let number1 = a % 5;
let number2 = b % 5;
let number3 = c % 5;

if (number1 == number2 && number2 == number3) {
    console.log("Ohirgi raqamlar bir xil");
} else {
    console.log("Ohirgi raqamlar har xil");
}

// № 14

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + ":juft son");
    } else {
        console.log(i + ":toq son");
    }
}

// № 15
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + "FizzBuzz");
    } else if (i % 3 == 0) {
        console.log(i + "Fizz");
    } else if (i % 5 == 0) {
        console.log(i + "Buzz");
    } else {
        console.log(i);
    }
}