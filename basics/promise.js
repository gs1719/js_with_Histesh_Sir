// JavaScript is a prototype-based language
//1. Object Literals
//2. Constructor Functions
//3. ES6 Classes (Syntactic Sugar for Constructors)
//4. Object.create()
//=========================================================
//1.Object Literal
// const person = {
//     name:"Alice",
//     age:30,
//     greet:function(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// console.log();

// console.log(person.name);
// person.greet();

//-------------------------------
//========================================
// constructor function

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// //adding a method to the prototype to be shared by all instances
// Person.prototype.greet = function(){
//     console.log(`Hello, my name is ${this.name}`);
// };
// const person1 = new Person("Bob",25);
// const person2 = new Person("Charles",35);

// console.log(person1.name);
// console.log(person2.name);
// person1.greet();
// person2.greet();

//-----------------------------------------------
//-----------------------------------------------
//===============================================
//creating the Promise
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{const success = true;
    
        if(success){
            resolve("Data fetched successfully!");//Fulill the promise
        }
        else{
            reject(new Error("Failed to fetch data.")); //Reject the promise
        }

    },2000); //runs after 2s
});

//consuming the promise
myPromise.then((message)=>{console.log(message);}).catch((error)=>{console.log(error.message);});

console.log("Proimse created, waiting for it to settle...");