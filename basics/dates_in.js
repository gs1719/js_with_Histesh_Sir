let myDate = new Date()
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());


// let myCreatedDate = new Date(2024,5,28)
// let myCreatedDate = new Date(2024,5,28,5,3)
// let myCreatedDate = new Date("2023-06-14")
let myCreatedDate = new Date("06-28-2024")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime())

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate);

