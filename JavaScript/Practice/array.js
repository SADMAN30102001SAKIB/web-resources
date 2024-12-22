//How to create an array that can create different data types
const hobbies = [
  "sports",
  "cooking",
  25,
  true,
  { name: "braking" },
  ["reading", "traveling"],
];

//To see the values of the array using console.log run this file
console.log(hobbies);

//how to loop through an array?
hobbies.forEach(value => {
  console.log(value);
});

// for (let hobby of hobbies) {
//   //this will console log individual elements of an array
//   console.log(hobby);
// }

// for(let index in hobbies){
//     //this would achieve the same result as above for loop
//     console.log(hobbies[index]);
// }

let hobbiesArray = ["sports", "cooking", "painting"];

//how to create a subset? This would grab all the elements [1,2) (excluding the 2nd index element)
let hobbiesSubset = hobbiesArray.slice(1, 2);
//this would output sports and cooking
console.log(hobbiesSubset);

//how to filter array?
let filteredHobbies = hobbiesArray.filter(val => val !== "sports");
//returns an array with everything inside it except for elements that equal "sports"
console.log(filteredHobbies);

//what is a map method - it returns a new array from the original array and takes a function as
// an argument and defines how to transform the element and returns a new array

//this adds a string hobby: in the beginning of each of the values inside the hobbies array
let updatedHobbies = hobbiesArray.map((value, index) => "hobby: " + value);
//see the value of updated hobbies
console.log(updatedHobbies);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
