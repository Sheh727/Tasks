// task #1
// Map to multiply each number by 2:
let numbers = [1,2,3,4,5];
const multiplyByTwo = numbers.map(num => num * 2);
console.log(multiplyByTwo);

// task # 2
// Filter to Get Fruits with More than 5 characters:
let fruits = ["apple","banana","cherry","date","grape"];
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

// task  # 3
// map and filter for square of even numbers:
let number = [1,2,3,4,5,6,7,8,9,10];
const evenSquares = number.filter(num => num % 2===0).map(num => num**2);
console.log(evenSquares);

 //task # 4
 // map to convert celcius to fahrenheit:
 let celcius = [0,10,20,30,40];
 const fahrenheit = celcius.map(temp => (temp * 9/5) + 32);
 console.log(fahrenheit);

// task # 5
// foreach to log names with ! marks:
let names = ["Alice","Bob","Charlie","David","Emily"];
names.forEach(name => console.log(`${name}!`));

//task # 6
 // map and filter for double values of odd numbers:
 let no = [3,6,9,12,15,18];
const doubleOdds = no.filter(num => num % 2!==0).map(num => num*2);
console.log(doubleOdds);


