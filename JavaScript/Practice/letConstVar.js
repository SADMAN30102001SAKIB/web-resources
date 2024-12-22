//How to declare a variable
//var is an outdated way to declare a variable, from now on we are going to be using let

//If a variable's value should never change make it constant (const) so that you get an error if you accidentally change it
const name = "Nata"; //example of string that cannot be changed because it is a constant

let age = 26; //example of number
let userHobbies = true; //example of boolean

//Run this file in your terminal to see outputted result by console.log
//It should output: Nata
console.log(name, age, userHobbies);

let nameAgeCombination = name + age; //Global Variable

//If you uncomment the line below, you are going to get an error when running this file stating that you are assigning
// a value to constant variable

// name="Nata Vacheishvili"

//How to declare a function
/***
 *
 * @param name - Name of the user
 * @param age - Age of the user
 * @returns {string} - would return a string such as Name is Nata, Age is 26
 */
function whoIsUser(name, age) {
  console.log(nameAgeCombination);
  /* This will be accessible since the variable is defined outside and would console log Nata26
       but if you were to define nameAgeCombination variable here instead and tried to access it outside of this function
       due to function scoping, this variable would be undefined.
     */
  return "Name is " + name + ", Age is " + age;
}
// See the output of the function with given arguments of name and age
console.log(whoIsUser(name, age));
