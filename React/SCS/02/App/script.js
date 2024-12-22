// let arr = [1, 2, 3, 4];
// let arr2 = arr;
// // let arr2 = [1, 2, 3, 4] (NO)
// // let arr2 = address of arr (YES)
// arr2.pop();
// console.log(arr); // [1, 2, 3] because arr is a reference type

// let state = [1, 2, 3, 4];
// state.pop(); // can't do this as state needs to update in an immutable way
// console.log(state); // [1, 2, 3]

// let state = [1, 2, 3, 4];
// let copy = state;
// copy.pop(); // state is changing in this line, which react does not allow
// state = copy;
// console.log(state);

// let state = [1, 2, 3, 4];
// let copy = [...state];
// copy.pop();
// state = copy; // changing is an immutable way
// console.log(state);

// let arr = [1, 2, 3];
// // let a = arr[0]
// // let c = arr[2]
// let [a, , c] = arr;
// console.log(a, c);

// let obj = {
//   name: "sakib",
//   age: "22",
//   social: {
//     insta: "@sakib123",
//     twitter: "@sakib_123",
//   },
//   hobbies: ["gaming", "series/movies", "fitness"],
// };
// // let insta = obj.social.insta;
// let { age, name } = obj;
// let { insta } = obj.social;
// console.log(name, age, insta);

// import { sum } from "./utils/sum";
import { sum } from "./utils/sum.js";
console.log(sum([1, 2, 3, 4]));

// const func = () => { name: "sakib" };
// console.log(func()); // undefined

// const func = () => ({ name: "sakib" });
// console.log(func()); // { name: "sakib" }

// let arr = [3, 4, 5, 6, 7, 8, 9];
// arr = arr.map(elem => (elem > 5 ? elem + 5 : elem));
// console.log(arr); // [3, 4, 5, 11, 12, 13, 14]

// let arr = [3, 4, 5, 6, 7, 8, 9];
// arr = arr.filter(elem => elem > 5);
// console.log(arr); // [6, 7, 8, 9]
