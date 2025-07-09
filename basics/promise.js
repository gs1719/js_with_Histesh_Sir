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


//========================================
// constructor function

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// adding a method to the prototype to be shared by all instances
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
//===============================================
//creating the Promise
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = true;
    
//         if(success){
//             resolve("Data fetched successfully!");//Fulill the promise
//         }
//         else{
//             reject(new Error("Failed to fetch data.")); //Reject the promise
//         }

//     },2000); //runs after 2s
// });

//consuming the promise1
//important thing to note that resolve is connected to then 
//so anything thing passed from above will be catched here

// we are doing chaining here there could be multiple then and one catch and one finally

// myPromise
//     .then((message)=>{console.log(message);})
//     .catch((error)=>{console.log(error.message);});

// console.log("Proimse created, waiting for it to settle...");


//===============================================
//===============================================

// 1)
// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(`Async task is completed`);
//         resolve();
//     },1000);
// });

// promiseOne.then(function(){
//     console.log("Promise consumed");
// });


// ======================================
// ======================================
// 2)
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2"); 
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Async 2 resolved");
// });

// ======================================
// ======================================


// 3)
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Gaurav",password:"password123",email:"gauravsriup@gmail.com"});
//     },1000);
// });

// //consumption
// promiseThree.then(function(user){console.log(user);}).catch().finally();


// =======================================
// =======================================
//4)
//creation

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(error){
//             resolve({username:"Gaurav",password:[{otp:1234,text:"password"}]});
//         }
//         else{
//             reject('Error:something went wrong');
//         }
//     },1000);
// });

//consumption

// promiseFour.then( (user)=>{
//     console.log(user);
//     return user.password[0];
// }).then(
//     (password)=>{
//     console.log(password.text,password.otp);
//     }
// ).catch(
//     function(error){
//         console.log(error);
//     }

// ).finally(
//     ()=>{console.log("Will be executed anyway");

//     }
// );


// ===========================================
// ============================================
//5)
// creation of promise
// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({
//                 username:"Gaurav",
//                 password:"Password"
//             });
//         }else{
//             reject("Error");
//         }
//     },1000);
// });

//consumption
//5)
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
        
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive();