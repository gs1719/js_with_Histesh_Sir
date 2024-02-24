let score = 'hitesh'
// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// it will show number on line number 6 but
// when you print that it will show it as NaN as string could not be converted into number

let checkChar = 'a'
let charInNumber = Number (checkChar)
// console.log(charInNumber);

// still it will remained NaN as it will 
// as there is no character specified here in this site
// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// =================================================
//  Entered Boolean
// ================================================


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)

 console.log(booleanIsLoggedIn);


/*
// 1 => true; 0 => false
// "" => false
// "hitesh" => true
*/

/**
 * 
 * toh baat yeh hai ki 
 * false ayega =>
 * 0 pe and ""(empty string) pe
 * 
 * true ayega 
 * 1 and above pe and "one letter and above pe"
 */