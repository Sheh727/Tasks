//task 1
//square root
const square = (n) => n * n;

console.log(square(4));


 //task 2
 function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
let result = factorial(0);
console.log(result); 

//task 3
function divideByTwo(number) {
  return number % 2 === 0;
}
let num = 12;

if (divideByTwo(num)) {
  console.log(`${num} is divisible by 2.`);
} else {
  console.log(`${num} is not divisible by 2.`);
}

//task 4
function calculator(a,b) {
  return {
      sum: a + b,
      division: a/ b,
      multiplication: a*b,
      modulus: a%b,
      exponential: a**b,
      subtraction: a-b,
  };
}
console.log(calculator(10, 5));


//task 5
function celsiusToFarenheit(celsius){
  return (celsius *9/5) + 32; 
}

  console.log( celsiusToFarenheit(0));
  console.log( celsiusToFarenheit(25));
  

//task 6
function findthelargestnum(num1,num2,num3){
  if(num1 >= num2 && num1 >= num3){
    return num1;
  }
  else if(num2 >= num1 && num2 >= num3){
    return num2;
  }
  else{
    return num3;
  }
}
  console.log(findthelargestnum(5,12,8));

  
// task 7
function reverseString(str){
  let reverse="";
  for (let i=str.length-1; i>=0; i--){
    reverse += str[i];
  }
    return reverse;
}
console.log(reverseString("ali"));


//task 8
function fizzBuzz(){
for(let i=1; i<=100; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
    } 
      else if(i%3 === 0){
        console.log("Fizz"); 
      }
      else if(i%5 === 0){
        console.log("Buzz");
      } else{
        console.log("invalid no");
      }
} 
}
fizzBuzz();

     //task 9
     function sumArray(arr){
      let sum = 0;
      for(let i=0; i < arr.length; i++){
        sum += arr[i];
      }
      return sum;
     }
     console.log(sumArray([1,2,3,4,5]));

     //task 10
     function calculateAverage(arr){
      let sum=0;
      for(let i=0; i < arr.length; i++){
        sum +=arr[i];
      }
      return sum / arr.length;
     }
     console.log(calculateAverage([10,20,30,40]));


     //task 11
     function findMinMax(arr) {
      if (arr.length === 0) {
          return null; 
      }
      let min = arr[0];
      let max = arr[0];
  
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
              min = arr[i];
          }
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return { min, max };
  }
  const numbers = [10,20,5,30,25];
  const solution = findMinMax(numbers);
  console.log(solution); 
     
     
     //task  12
  function vowel_count(str1){

  let vowel_list = 'aeiou';
  let vcount = 0;
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1){
    {
      vcount += 1;
    }
  }
  return vcount;
}
  }
console.log(vowel_count("hello world"));



