/*
What is a Promise?
A promise is an object that represents the eventual completion or failure
of an Asynchronous operation.
In other words, a promise can be used
to handle the results of an Asynchronous
operation, such as a network
request or a file read operation.
Promises have three possible states
pending, fulfilled, and rejected.
When a promise is created,
it starts in a pending state.
If the Asynchronous operation succeeds,
the promise will be fulfilled, and if
it fails, the promise will be rejected.
*/

/**
 * A function that uses fetch to get the results from Public GitHub API regarding the username that we passed in
 * Even though we don't actually use promises in this function, the function getUser takes a username parameter and
 * returns a Promise that resolves to the JSON data of a GitHub user fetched from the GitHub API URL.
 * The Promise is returned by the fetch function, which makes an HTTP request to the API URL and returns a Promise that resolves to a Response object.
 * The json method is called on the Response object to parse the response as JSON and return a Promise that resolves to the parsed JSON data.
 * Therefore, the function getUser relies on the Promise-based nature of the fetch function and
 * the json method to handle the asynchronous nature of the API request and response.
 * @param username - username of a user about which we'd like to get information about
 * @returns {Promise<any>} - data about the user
 */
// const getUser = username => {
//     const API_URL = `https://api.github.com/users/${username}`;
//     return fetch(API_URL).then((value) => value.json())
// }
//  getUser('openai').then(val => console.log(val));

/**
 * The Async keyword is used to create
 * Asynchronous functions in JavaScript.
 * And when you declare a function
 * with the Async keyword,
 * you can use the await keyword inside
 * the function to wait for the results
 * of an Asynchronous operation.
 */

/**
 * This code is similar to the previous code you provided,
 * but it includes an async function and await keyword,
 * which are features introduced in ECMAScript 2017 that make it easier to work with asynchronous code.
 * The async function getUser takes a username parameter and returns a Promise that resolves to the JSON
 * data of a GitHub user fetched from the GitHub API URL.
 * Inside the getUser function, the await keyword is used to wait for the fetch function to return a Promise
 * that resolves to a Response object. Once the Response object is returned, the json method is called on it to parse the
 * response as JSON and return a Promise that resolves to the parsed JSON data.
 * @param username - username of a user about which we'd like to get information about
 * @returns {Promise<any>}
 */
// const getUser = async username => {
//     const API_URL = `https://api.github.com/users/${username}`;
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     return data;
// }
// getUser('openai').then(val => console.log(val));

//NOW LET'S USE PROMISE KEYWORD

/**
 * This function getGithubUser takes a username parameter and
 * returns a Promise that resolves to the JSON data of a GitHub user fetched from the GitHub API URL.
 * Inside the function, a new Promise is created,
 * which takes two arguments: a resolve function and a reject function. These functions are used to either fulfill or reject the Promise.
 * The fetch function is called to make a request to the GitHub API URL, and the response is parsed as JSON using the json method.
 * If the data object returned by the API includes a message property with the value "Not Found",
 * the Promise is rejected with an error message "User not found". Otherwise, the Promise is resolved with the parsed data object.
 * The .catch() method is used to handle any errors that occur during the fetch request or JSON parsing, and it rejects the Promise with the error.
 * This function provides a way to handle errors in case the user is not found, and it uses Promises to handle asynchronous code.
 * @param username - username of a user about which we'd like to get information about
 * @returns {Promise<any>}
 */
const getGithubUser = username => {
  return new Promise((resolve, reject) => {
    const API_URL = `https://api.github.com/users/${username}`;
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.message === "Not Found") {
          reject("User not found");
        } else {
          resolve(data);
        }
      })
      .catch(err => reject(err));
  });
};

//successful call
getGithubUser("SADMAN30102001SAKIB")
  .then(val => console.log(val))
  .catch(err => console.log("error", err));

//unsuccessful call
getGithubUser("akjsdhkasjdhksajhdkasjdhksajhdkajhdkajshd")
  .then(val => console.log(val))
  .catch(err => console.log("error", err));

// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/
