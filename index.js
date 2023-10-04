// let name = 'Nick'; //string literal
// let age = 30; //number literal
// let isApproved = false; //boolean literal
// let firstName = undefined;
// let lastname = null;
// let person = {
//     name:'Nick',
//     age:30
// };

// // Dot Notation
// person.name ='Marvericks';
// console.log(person)

// let selectedColors = ['red','blue','green'];
// selectedColors[3] = 1;
// console.log (selectedColors[3]);
//Performing a Task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Fai', 'Cute');
// greet('Ras', 'Dave');

// //Calculating a value
// function square(number) {
//     return number * number;
// }


// console.log(square(2));
// let x = 10;
// let y =1;
// console.log (x+y);
// console.log (x-y);
// console.log (x*y);
// console.log (x/y);
// console.log (x%y);
// console.log (x**y);
// increement (++)
// decrement 
// console.log(++x)

// let x = 1;

// // relational
//  console.log(x > 0);
//  console.log(x >= 0);
//  console.log(x < 0);
//  console.log(x <= 0);

// //  Equality
// console.log(x === 1);
// console.log(x !== 1);

// //strict Equyality (Type + Value
// console.log(1 === 1);
// console.log('1' === 1);

// //Lose Equality
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);
// console.log(false == 0);

// //If a customer has more than 100 points,
// // they are a 'gold' customer, otherwise,
// // they are a 'silver' customer.

// let points = 190;
// let type = points > 100 ? 'gold' : 'silver'

// console.log(type)

// //Logical AND (&&)
// //Returns TRUE if both operands are TRUE
// console.log(true && false);

// let highIncome = true;
// let  goodCreditScore = true;
// let eligibleForLoan = highIncome | |  goodCreditScore;

// //NOT (!)
// let applicationRefused = !eligibleForLoan;

// console.log('application Refused');

//  let x =(2+ 3) * 4;
// console.log(x);

//Swiping variables
// let a = 'red';
// let b = 'blue';

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

//If...else

// let hour = 18;
// if (hour >= 6 && hour < 12) 
//     console.log('Good Morning Sweetheart');
// else if (hour >= 12 && hour < 18 ) 
//     console.log('Good Afternoon Wife');
// else if (hour >= 18 && hour <22) 
//     console.log('Good Evening Sidechick')
// else 
//     console.log('Good Night Darling');

//switch...case
//Loops
//1.For
// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !==0)console.log(i);
//     // console.log('Hello World', i)
// }
//While
// let i=0;
// while (i<=5){
//     if (i % 2 !==0)console.log(i);
//     i++;
// }
//do-while
// let i = 4;
// do {
//     if (i % 2 !==0)console.log(i);
//     i++;
// }
// while (i <= 5);
// Infinite Loop
// let i=0
// while (i<5) {
//     console.log(i);
//     i++
// }
//for...in
// const person = {
//     name: 'Nick', 
//     Age: 30
// };
// for (let key in person)
// console.log(key, person[key]); 

// const colors = ['red', 'green', 'blue'];

// for (let index in colors)
// console.log[index, colors[index]]
//for...of
//Break and Continue
// let i = 0;
// while (i <= 10) {
//     // if (i ===5) break;
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++
// } 
// Q1
// let i = findMaximum(2, 7);
// console.log(i);

// function findMaximum(a, b) {
//     // Using the ternary operator to find the maximum of two numbers
//     return a > b ? a : b;
// }
// Q2

// function isLandscape(width, height) {
//     return (width > height) 
    
// }
// console.log(isLandscape(200, 600))

// // Q3
// function fizzBuzz(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         return "FizzBuzz";
//     } else if (number % 3 === 0) {
//         return "Fizz";
//     } else if (number % 5 === 0) {
//         return "Buzz";
//     } else if (number % 3 !== 0 && number % 5 !== 0) {
//             return number;
//     } else {
//         return NaN;
//     }
// }
// console.log(fizzBuzz(99));
// Q 4
// speed limit = 70
// 5 --> 1 point
// Mathfloor(1.3)
// 12 points --> suspended

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit) {
//         return "OK";
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) {
//             return "License Suspended";
//         } else {
//             return "Points: " + points;
//         }
//     }
// }
// const speeds = [60, 70, 80, 95, 140];
// speeds.forEach(speed => {
//     console.log("Speed: " + speed + " km/hr - " + checkSpeed(speed));
// });

//Q5
// showNumbers(10);
// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) console.log(i, 'EVEN');
//         else console.log(i, 'EVEN');
//     }
// }

//Q6

const array = [0, null, undefined, '', 41, 19];
function countTruthy(array) {
    let count = 0;
    for ( let value of array)
     if (value)
     count++;
    return count;
}
console.log(countTruthy(array));



