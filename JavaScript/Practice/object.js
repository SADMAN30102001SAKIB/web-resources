//How to declare an object - using {}
const person = {
  name: "Nata",
  age: 26,
};

// `for...in` Loop: This loop iterates over all enumerable properties of an object, including inherited enumerable properties. It's the most directly applicable loop for iterating over the properties of your `person` object.
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//`for...of` Loop: This loop requires an iterable object (e.g., arrays, strings, maps, sets, etc.). To use `for...of` with an object like `person`, you would first need to use `Object.keys()`, `Object.values()`, or `Object.entries()` to get an iterable form.
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

const modifiedEntries = Object.entries(person).map(([key, value]) => {
  if (typeof value === "number") {
    return [key, value * 2]; // Example: Double the number values
  }
  return [key, value];
});

console.log(modifiedEntries); // [["name", "Nata"], ["age", 52]]

//you can directly use the `for...in` loop or indirectly use `forEach`, `for...of`, `map`, and `filter` by converting the object into an array format using `Object.keys()`, `Object.values()`, or `Object.entries()`.

const keys = Object.keys(person);
console.log(keys); // ["name", "age"]

const values = Object.values(person);
console.log(values); // ["Nata", 26]

const entries = Object.entries(person);
console.log(entries); // [["name", "Nata"], ["age", 26]]
