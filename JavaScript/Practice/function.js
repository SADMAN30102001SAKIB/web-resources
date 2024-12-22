/**
 * Example of function that sums a and b arguments using the traditional function definition
 * @param a - expects a number
 * @param b - expects a number
 * @returns {number} returns the sum of a and b
 */

function myFunction(a, b) {
  return a + b;
}

/**
 * Example of a function that sums a and b arguments using the arrow function definition ES6 Syntax
 * @param a - expects a number
 * @param b - expects a number
 * @returns {number} - returns the sum of a and b
 */
//Your other logic before returning a value would go here...
const myArrowFunction = (a, b) => {
  return a + b;
};

//You can also rewrite the ^^^^ above function in a shorter way
//Only do this if you have a single statement that would return a value, if you have multiple statements
//that do some other actions inside the function that do not return the value right away, then do not do this.
// const myArrowFunction = (a,b) => a+b;

/**
 * Function that returns 10 directly
 * @returns {number}
 */
const random = () => 10;

//Running this file should give you the same results for myFunction and myArrowFunction if you pass the same arguments to each one of them
console.log(myFunction(1, 2), myArrowFunction(1, 2), random());

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2); // concise and clear
console.log(doubled);
