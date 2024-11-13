// Task 1
// for( let i=1; i<=100; i++){
//     console.log(i);
// }

// let age = 15;  
// if (age > 10 && age < 20) {
//    console.log("The age is between 10 and 20.");
 // else {
   // console.log("The age is not between 10 and 20.");
// }

// task 3
//let a = 6;

//if(a%2 ==0) {
//console.log();

//else if (a%3 == 0) {
// console.log();

//}
//else{
 //console.log();

//} 

  



//task start from here


// task 3
let n=10;
 for(let i=1; i<=10; i++){
    console.log(n + "*" + i + "=" + n*i);
}

// task 5
 for(let i=1; i<=50; i++){
     if (i%2 === 0) {
console.log(i)
     }
}

// task 6
 let value= 5;
 let fact = 1;
 for(let i=1; i<=n; i++){
    fact *= i;
 }
 console.log(fact);

 // task 8
 let num= 3; // write any odd number between 1 and 100
 let oddsum =1
 for(let i=1; i<=n; i++){
    if (i%2 !== 0) {
        oddsum *= i;
    }
   }
 console.log(oddsum);

 //task 7
 let i=1;
 for(i=1; i<=100; i++){
 if (i%3 === 0 && i%5 ===0){
     console.log("FizzBuzz");
 } 
   else if(i%3 ===0){
     console.log("Fizz"); 
   }
   else if(i%5 ===0){
     console.log("Buzz");
   } else{
     console.log(i);
   }
  }
  
// task 2
 let nm= 45
 let sum=0;
 for(let i=1; i<=n; i++){
    sum += 1;
}
 console.log(sum);

 
// task 10

 let str= "aeiou" ;
 let count =0;
 const vowels ="aeiou";
 for (const char of str) {
     if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u" )
 { count++ }
     }
 console.log(count);
  

  
//  //task 4
 let string="";
 let reversestr="";
 for (let i=str.length-1; i>=0; i--){
   reversestr += str[i];
 }
 console.log(reversestr);


