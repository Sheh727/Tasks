//task 1
 function addArray(arr, index, value) {
   arr.splice(index, 0, ...value); //index(0,1etc) value to insert value at specific index
 return arr
 }
let arr = [1, 2, 3, 4, 5];
 let index=2
 let value = [5, 6];
console.log(addArray(arr, 0, value));

//task 2
 let arr=[3,2,1,0,-1,-2,-3,-4]
 function removenegative(arr){
    return arr.filter(num => num >= 0);
 }
 const filternumbers= removenegative(arr)
 console.log(filternumbers);

//task 3
 function sumOfEvenNumber(n) {
   let sum = 0;
   for (let i = 0; i < n; i++) {
     sum = n * (n + 1);
   }
   return sum;
 }
 let n = 2;
if (n > 0) sum = sumOfEvenNumber(n);
console.log(`the sum of first ${n} even number is ${sum}`);

//task 4
 function removeevennumbers(numbers) {
   let oddno = [];
   for (let i = 1; i < numbers.length; i++) {
     if (numbers[i] % 2 !== 0) {
       oddno.push(numbers[i]);
     }
   }
   return oddno;
 }
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const oddno = removeevennumbers(numbers);
 console.log(oddno);

//task 5
 function calculateareaofcircle(radius) {
   let area = 3.14159 * (radius * radius);
return area;
 }
 let radius = 5;
 const area = calculateareaofcircle(radius);
 console.log(area);

//task 6
 function removefaillinggrades(grades) {
   for (let i = 0; i < grades.length; i++) {
     if (grades[i] < 50) {
       grades.splice(i, 1);
     }
  }
   return grades;
 }
 let grades = [42, 65, 85, 67, 29, 98, 50, 38, 81];
 const result = removefaillinggrades(grades);
 console.log(result);

//task 7
let cart = ["Oil", "Juice", "Bread"];
function additems(additems, newItem) {
  additems.push(newItem);
  return additems;
}
function removeitems(removeItems) {
  removeItems.pop();
  return removeItems;
}
function updatequantity(updateItems, index, updItem) {
  updateItems.splice(index, 1, updItem);
  return updateItems;
}
console.log(additems(cart, "Apple"));
console.log(removeitems(cart));
console.log(updatequantity(cart, 0, "Banana"));
// console.log(cart);
