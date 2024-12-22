const person = {
  name: "Nata",
  age: 26,
  // greet: () => {
  //     console.log("Hi my name is "+this.name); -- this.name refers to global scope, not the object's therefore it this.name here would be undefined
  // },
  greet: function () {
    //this.name here would have a value of Nata, since it refers to the scope of the object itself
    console.log("Hi my name is ", this.name);
  },
};

//See the output of a person
console.log(person);

//See the output of greet function
person.greet();

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hi, my name is " + this.name);
};
// Alternative of above ^^^^
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log("Hi, my name is " + this.name);
//   }
// }

// Another example
class Component {
  constructor() {
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: true }); // `this` refers to the Component instance
  };
}
