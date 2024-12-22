//What is destructuring?
//A way to extract data from arrays, objects, maps and sets into distinct variables

const person = {
  name: "Nata",
  age: 26,
  occupation: "Developer",
};
//ways to separate this into distinct variables?
//The code below would be repetitive and confusing if there are multiple properties to extract
// const name = person.name;
// const age = person.age;
// const occupation = person.occupation

//Same result as above but using destructuring
// const {name,age,occupation} = person;
// console.log(name,age,occupation);

//Destructuring an array?

const numbers = [1, 2, 3, 4, 5];

//Code below also repetitive and complex if we have multiple items that we want to pull out of the array
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];

//Same code as above using destructuring would be
const [first, second, third] = numbers;
console.log(first, second, third);

//combination of destructuring and spread operator
const { occupation, ...rest } = person;
//would not contain occupation
console.log(rest);
