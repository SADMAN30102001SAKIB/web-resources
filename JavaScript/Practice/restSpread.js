const hobbies = ["sports", "cooking"];

//recreating this array and copying the values into a new array
const copiedHobbiesArray = [...hobbies];

//will hold same values as hobbies
console.log(copiedHobbiesArray);

//you can do the same with objects
const person = { name: "Nata", age: 26 };
//you can also copy the values of person object and add in the values of another object inside this object
const copiedPerson = { ...person, ...{ hobby: "traveling" } };
console.log(copiedPerson);

//What is a rest operator?
/**
 * A function that takes in arguments and converts them to an array using rest operator
 * @param args - takes in as many arguments as user passes to it and converts it directly to an array using rest operator
 * @returns [] - returns an array
 */
const toArray = (...args) => args;

//will return an array even though, we do not pass in array, we pass in single values one by one, but its converted to an array using rest operator
console.log(toArray(1, 2, 3));

//spread operator is used to pull out elements from the array or an object
//rest operator is used to merge multiple elements into an array

// https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
