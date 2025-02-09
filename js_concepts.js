//==========let and const==========
let a = 10
if (true) {
    let a = 20
    console.log(a)
}
console.log(a)

const car = {
    brand: "Audi"
}
// car = {
//     brand : "Sujuki"
// }
// console.log(car)

function testVar() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }
}
// testVar();

// setTimeout(() => console.log(100), 5000);

// ==========arrow function==========
const add = (a, b) => a + b;

console.log(add(5, 6));

const sayHello = () => console.log("Hello Whats up");
const getHello = () => "Hello Whats up";
sayHello()
console.log(getHello());


const obj = {
    name: "John",
    regularFunc: function () {
        console.log(this.name); // "John"
    },
    arrowFunc: () => {
        console.log(this.name); // ❌ Undefined (because `this` is inherited from outside)
    }
};

obj.regularFunc();
obj.arrowFunc();
// ========= trmplate literals=========

let c = 5, d = 10;
console.log(`The sum of ${c} and ${d} is ${c + d}.`);

// ==========object and array destructuring===========
const user = {
    name: "Alice",
    age: 25,
    country: "USA"
};

const { name, country, salary = 50000 } = user
console.log(salary);
printUser(user)
function printUser({ name, age, country }) {
    console.log(`name : ${name}, salary:${salary}, country:${country}`);
}
const numbers = [10, 15, 20, 25];
const [g1, h1] = numbers

//=============spread operator============
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// ==============default parameters============ 
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}
greet('Alice');
greet()


//==============import & export============
// module.js
// export function greet(name) {
//     return `Hello, ${name}!`;
//   }

//   export function farewell(name) {
//     return `Goodbye, ${name}!`;
//   }

// import { greet, farewell } from './module.js';
// console.log(greet('Alice'));   // Output: Hello, Alice!
// console.log(farewell('Alice')); // Output: Goodbye, Alice!

// module.js
// export default function greet(name) {
//     return `Hello, ${name}!`;
//   }

// import greet from './module.js';
// console.log(greet('Alice')); // Output: Hello, Alice!

// ========Optional Chaining===========
const user1 = { name: "Alice" };

// Trying to access `user.address.city` without optional chaining
// console.log(user1.address.city); 
// ❌ ERROR: Cannot read properties of undefined (reading 'city')
console.log(user.address && user.address.city);
console.log(user?.address?.city);

// ============callbackes===========
function goodbye() {
    console.log("Bye Alice");
}
function fn1(name, callback) {
    console.log(`Hello ${name}`);
    callback()
}

console.log("Start");

// setTimeout(() => {
//   console.log("Delayed Message");
// }, 1000);

console.log("End");

const number2 = [1, 2, 3];

const doubled = number2.map((num) => num * 2)

number2.forEach((num) => {
    console.log(num * 2);
});

// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//       console.log("Step 2");
//       setTimeout(() => {
//         console.log("Step 3");
//       }, 1000);
//     }, 1000);
//   }, 1000);

function execute(callback) {
    console.log("Before Callback");
    callback();
    console.log("After Callback");
}

execute(() => console.log("Inside Callback"));

function asyncCallback(callback) {
    console.log("1");
    setTimeout(callback, 1000);
    console.log("2");

}
// asyncCallback(() => console.log("called"));


//   ====================Higher-Order Functions in JavaScript (map, filter, reduce)===============
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];

const names = users.map(user => user.name);
console.log(names);

const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4, 6]

const users2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];
const adults = users2.filter(user => user.age >= 18);
console.log(adults);

const numbers3 = [1, 2, 3, 4];
let sum2 = numbers3.reduce((acc, num) => acc + num, 0)
console.log(sum2);


const numbers4 = [5, 21, 8, 12, 22];
const max = numbers4.reduce((acc, num) => (num > acc ? num : acc), numbers4[0]);
console.log(max);

const numbers5 = [1, 21, 8, 12, 4];
const min = numbers5.reduce((acc, num) => (num < acc ? num : acc), numbers5[1])
console.log(min);

// Sum of Squared Even Numbers
const number6 = [1, 2, 3, 4, 5, 6];
let res = number6
    .filter((num) => num % 2 == 0)
    .map((num) => num * num)
    .reduce((acc, num) => (acc + num), 0)
console.log(res);

//average
const numbers7 = [5, 12, 8, 21, 7];
let avg=numbers7.reduce((acc, num, index, numbers7) => {
    acc = acc + num
    if (index == numbers7.length - 1) {
        console.log(acc);
        return acc / numbers7.length
    }
    console.log(acc);
    return acc
}, 0)
console.log(avg);

const users3 = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
  ];
  
  // Get all names
  const names2 = users3.map(user => user.name);
  console.log(names2); // Output: ["Alice", "Bob", "Charlie"]
  
  // Find first user from Los Angeles
  const laUser = users.find(user => user.city === "Los Angeles");
  console.log(laUser); // Output: { name: "Bob", age: 30, city: "Los Angeles" }
  
  // Get all users above 25
  const olderUsers = users.filter(user => user.age > 25);
  console.log(olderUsers); // Output: [{ name: "Bob", age: 30, city: "Los Angeles" }, { name: "Charlie", age: 35, city: "Chicago" }]
  
  // Get total age
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  console.log(totalAge); // Output: 90
  
  // Convert user object into key-value pairs
  console.log(Object.entries(users[0]));
  // Output: [["name", "Alice"], ["age", 25], ["city", "New York"]]
  
//   ===================JavaScript DOM Manipulation & Events===============

{/* <p id="message">Hello, World!</p>
<button onclick="changeText()">Click Me</button>

<script>
  function changeText() {
    let para = document.getElementById("message");
    para.innerText = "Hello, JavaScript!";
  }
</script> */}


{/* <p class="greet">Hello</p>
<p class="greet">Hi</p>

<script>
  let firstPara = document.querySelector(".greet");
  firstPara.style.color = "blue"; // Only the first "p" changes to blue
</script> */}

{/* <button id="myButton">Click Me</button>

<script>
  let button = document.getElementById("myButton");

  button.addEventListener("click", function() {
    alert("Button Clicked!");
  });
</script> */}

{/* <button id="stopButton">Stop Click Alert</button>

<script>
  function showAlert() {
    alert("Button Clicked!");
  }

  let button = document.getElementById("stopButton");

  button.addEventListener("click", showAlert);

  // Remove event after 5 seconds
  setTimeout(() => {
    button.removeEventListener("click", showAlert);
  }, 5000);
</script> */}

{/* <p id="text">Hello</p>
<button onclick="changeText()">Change Text</button>

<script>
  function changeText() {
    document.getElementById("text").innerText = "Hello, JavaScript!";
  }
</script> */}

{/* <div id="content">Original Content</div>
<button onclick="changeHTML()">Change Content</button>

<script>
  function changeHTML() {
    document.getElementById("content").innerHTML = "<b>New Bold Content</b>";
  }
</script> */}

{/* <button id="countBtn">Click Me</button>
<p>Click Count: <span id="counter">0</span></p>

<script>
  let count = 0;
  let btn = document.getElementById("countBtn");

  btn.addEventListener("click", function() {
    count++;
    document.getElementById("counter").innerText = count;
  });
</script> */}

// ===============Promises & Async/Await===========

// const myPromise = new Promise((resolve, reject) => {
//     let success = false; // Change to false to simulate rejection
    
//     setTimeout(() => {
//       if (success) {
//         resolve("✅ Operation Successful!");
//       } else {
//         reject("❌ Operation Failed!");
//       }
//     }, 1); // Simulate a delay of 2 seconds
//   });
  
  // Handling the Promise
//   myPromise
//     .then(result => console.log(result))  // If resolved
//     .catch(error => console.log(error))   // If rejected
//     .finally(() => console.log("🎉 Promise Completed!"));



fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())  // Convert response to JSON
//   .then(data => console.log(data))    // Display the data
  .catch(error => console.log("Error:", error));  // Handle errors

  async function fetchData() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
//   fetchData()

async function fetchMultiple() {
    try {
      let [users, posts] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
      ]);
  
      console.log("Users:", users);
      console.log("Posts:", posts);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
//   fetchMultiple();


//   ===========================JavaScript Classes, this Keyword, and Prototypes=====================


class Person {
    constructor(name, age) {
      this.name = name;  // Assign instance properties
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating instances
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  person1.greet(); // Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Hello, my name is Bob and I am 30 years old.

  class Car {
    constructor(model) {
      this.model = model;
    }
  
    showModel() {
      console.log(`Car Model: ${this.model}`);
    }
  }
  
  const car2 = new Car("Tesla");
  car2.showModel();  // ✅ Car Model: Tesla

  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    // normalFunction() {
    //   setTimeout(function() {
    //     console.log(`🐾 Normal Function: ${this.name}`); // ❌ Undefined (loses `this` context)
    //   }, 1000);
    // }
  
    // arrowFunction() {
    //   setTimeout(() => {
    //     console.log(`🦁 Arrow Function: ${this.name}`); // ✅ Works (inherits `this`)
    //   }, 0);
    // }
  }
  
  const lion = new Animal("Lion");
//   lion.normalFunction(); // ❌ Undefined
//   lion.arrowFunction();  // ✅ Works
  



  class Animal2 {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Dog class inherits from Animal
  class Dog extends Animal2 {
    constructor(name, breed) {
      super(name); // Calls Animal's constructor
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks! 🐶`);
    }
    getBreed(){
        console.log(`name is ${this.name} breed is ${this.breed}`)
    }
  }
  
  const dog1 = new Dog("John", "Labrador");
  dog1.makeSound(); // ✅ Buddy makes a sound.
  dog1.bark();      // ✅ Buddy barks!
  dog1.getBreed();














