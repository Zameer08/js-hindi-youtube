let score = "Loki"

//console.log(typeof score);
//console.log(typeof(score)); => Alternative of the above line you can also use this 

let valueInNumber = Number(score) // => this line ensures that the "score" variable is converted into number even though it's not a number
//console.log(typeof valueInNumber); => printing the type of valueInNumber on terminal
//console.log(valueInNumber); => printing what actually is in that varibale ( is it a NaN-not a number?, or a Number or a String or a boolean etc.)

// Null = 0 => if printed on terminal
// Undedefined => it is NaN
// "33" => 33 => Numbers can easily be converted to number withou any issues 
// "33abc" => NaN => Number mixed with characters or letter is a NaN
//  true => 1; false => 0

let isLoggedIn = "Ragnarock"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false => empty string gives 0 value on console.
// "Ragnarock" => true => non-empty string gives 1 value on console.

let someNumber = 44

let stringNumber = String(someNumber)
// console.log(stringNumber); => printed as a Number in console or terminal
// console.log(typeof stringNumber); => checking if that number is converted as a string or not and is occupying memory like a string in the memory (in short words Number acting as a String after conversion)

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); => if a string is on first place then every thing after it is treated as a String 
// console.log(1 + 2 + "2"); => if a string is on last place then every thing before it is treated normally.

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // messy style of writing code nobody likes this 

let gameCounter = 100
++gameCounter; 
// => incrementing before variable(pre-increment)means the value is added first then is inserted into the memory.
// => incrementing after variabel(post-increment)means the value is added after the variable value is inerted in the memory then there the increment is done.
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion