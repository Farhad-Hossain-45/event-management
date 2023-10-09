## Question 1 : 
let greeting;
greetign = {};
console.log(greetign);

## Answer : A: {}

## Explain : 
The answer is correct because the corrected code assigns an empty object to the variable greeting, and when console.log(greeting) is executed, it correctly logs the empty object to the console.

## Question 2 : 
function sum(a, b) {
  return a + b;
}

sum(1, "2");
## Answer : D: 3

## Explain :
The answer is correct because the parseInt function is used to convert the string "2" to the number 2, and then addition is performed, resulting in the numeric sum of 1 and 2, which is 3.

## Question 3 :
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food); 

## Answer : A : ["🍕", "🍫", "🥑", "🍔"]

## Explain :
The console.log(food); statement outputs the original food array because changing the info.favoriteFood variable does not affect the food array.

## Question 4 :
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

## Answer : B : Hi there, undefined

## Explain :

The sayHi function you provided expects an argument name, but you are calling it without passing any arguments in the console.log statement. This will result in an error because name is undefined.

## Question 5 :
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

## Answer : C : 3

## Explain :
The answer is correct because the code counts and logs the number of non-zero elements in the nums array, which are [1, 2, 3], resulting in the output 3.