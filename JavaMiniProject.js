/* 1. Promises
Create a function fetchData that simulates fetching data from an API. The function should
return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
should represent a user with properties id, name, and age.// */


let userInfo = {
    id: 1,
    name: 'Noah',
    age:23
}


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(userInfo)
            
        }, 2000);
    })

}

fetchData().then((data)=>
console.log(data))
.reject((error)=>
console.error(`Failed to fetch data ${error}`))



/**2. Closures
Create a function createCounter that returns an object with two methods: increment and
getCount. The increment method should increase the internal count by 1, and the getCount
method should return the current count. Use a closure to maintain the internal count variable. */


function createCounter(){
    let count = 0;

    return{
        increment: function(){
            count+=1},

    
        getCount: function(){
             return(count)
        }
    }

    }
      
let counter = createCounter()
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())



/* 3. Callbacks
Create a function processData that accepts an array of numbers and a callback function. The
function should process each number in the array using the callback function and return a
new array of processed numbers.
*/

function processData(numbers,callback){
    result = []
    for(let number in numbers){
        result.push(callback(number))

    }
    return result
} 


function cube(cubeNumber){
    return cubeNumber **3

}

let numbers = [1,2,3,4,5,6,7];

let cubeNumbers = processData(numbers,cube);
console.log(cubeNumbers)

/**4. Async/Await
Rewrite the fetchData function from Question 1 using async and await. */

/** */

function fetchData(){
   
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(userInfo)
        }, 2000);
    })
}

async function getData(){
    try{
    let data = await fetchData()
    console.log(data);}
    catch(error){
        console.error('An error occurred:', error);
    }
}

getData()

/**5. Array Manipulation: Map
Given an array of numbers, create a function that doubles each number using map. */

array = [1,2,3,4,5,6,7,8,9,11,12,15,16,17,18]

let doubleNumber = array.map(
    num => num*2
)
console.log(doubleNumber)

/**6. Array Manipulation: Filter
Given an array of numbers, create a function that filters out numbers less than 10 using filter. */

let filterNumber = array.filter(
    num => num<10
)
console.log(filterNumber)


/**7 Given an array of numbers, create a function that finds the first number greater than 15 using
find. */

let greaterThanFifteen = array.find(
    num => num>15
)
console.log(greaterThanFifteen)

/**8. Array Manipulation: Reduce
Given an array of numbers, create a function that sums all numbers using reduce. */

let sumOfNumber = array.reduce((sum,num)=>sum+num,0)
console.log(sumOfNumber)


/**9. Object Manipulation
Given an array of user objects, write a function to transform this array into an object where the
keys are user IDs and the values are the corresponding user objects. */



function arrayToObject(array){
    let userOjct = {} 
    for(let user of array){
        userOjct[user.id]=user
    }
    return userOjct
}

const usersArray = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Carol', age: 22 }
];

const usersObject = arrayToObject(usersArray)
console.log(usersObject)


/**10. Classes and Objects
Create a Person class with a constructor that accepts name and age parameters. Add a
method describe that returns a string describing the person. */


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
   describe() {
        console.log(`Your name is ${this.name} and your age is ${this.age}`)

    }

}

let info = new Person('Noah',23);
info.describe()


/**11. Inheritance
Create a Student class that extends Person and adds a grade property. Add a method study
that returns a string indicating the student is studying. */

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade

    };
    study(){
        console.log(`${this.name} is studying`)

    }
}

let student = new Student('Noah',23,'A');
student.study();
console.log(student.grade)


/**12. Error Handling with Promises
Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
fetch data&quot;. Handle this error using .catch when calling the function. */

/**13. Error Handling with Async/Await
Modify the fetchData function with async/await to handle errors using try/catch blocks. */

/**14. Complex Array Manipulation
Given an array of users, where each user has a name and an array of hobbies, create a
function that returns an array of all unique hobbies using reduce. */

const users = [
    { name: 'Alice', hobbies: ['reading', 'hiking', 'swimming'] },
    { name: 'Bob', hobbies: ['hiking', 'cycling', 'reading'] },
    { name: 'Carol', hobbies: ['swimming', 'cycling', 'painting'] }
];

let uniqueHobbies = function(users){
    users.reduce((users))

}





/**Conceptual Questions
1. Why are promises used in JavaScript? Explain the advantages of using promises over
traditional callback functions.
- Promises are used to handle asynchronous operation. Promises are more advantages becasue it avoid callback hell.


2. What is a closure in JavaScript? Provide an example.
- It's a feature where innner function has accesss to the outer functions's variables. 
example-
// function outerFunction(){
//     let outerVariable = 'I am outside';

//     function innerFuction(){
//         console.log(outerVariable);// can access outerVar
//     }
//     return innerFuction
// }
// const myClosure = outerFunction()
// myClosure();

3. What is a callback function and why is it used in JavaScript?
- A callback fucntion is a function that is passed into another function as an argument and is completed after some operation has been completed.

4. What are async/await in JavaScript and how do they improve asynchronous
programming?
-async and await in JavaScript provide a more readable and maintainable way to write asynchronous code by avoiding deeply nested callbacks (callback hell) 
and simplifying the handling of promises. They help make the code look more synchronous, improve error handling, and allow for both sequential and concurrent 
execution of asynchronous operations

5. Write the difference between ES6 and JS.
avaScript (JS) refers to the programming language itself, while ES6 is a specific version or iteration of the JavaScript language specification. 


6. What are some of the major features introduced in ES6?
 Introduces new syntax features like arrow functions, classes, template literals, let and const declarations, 
 destructuring assignments, spread/rest operators, and more. 
 */
















