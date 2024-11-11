/*fullName = "Tony stark";
age = 24;
price = 99.99;
x = null;
y = undefined;
fullName = 25;
console.log(fullName);
*/


/*
var - can be redeclared and updated - global scope variable
let - cannot be redeclared but can be updated - block scope variable
const - cannot be redeclared and updated - block scope variable
*/



/* DATA TYPES IN JS
Number
String
Boolean
Undefined
Null
BigInt
Symbol
*/



/*
const product = {
    productName: "Ball pen",
    rating: 4,
    offer: 5,
    price: 199,
};
console.log(product);
*/


/*
const profile = {
    userName: "bharatdhiman21",
    Posts: 0,
    followers: 90,
    following: 90,
};
console.log(profile);
*/


/*
ARITHMETIC OPERATORS
let a = 5;
let b = 2;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
*/



/*
EXTRA OPERATORS IN JS

let a = 5;
let b = 2;
// modulus
console.log("a % b = ", a % b);
// exponentiation
console.log("a ** b = ", a ** b);

// UNARY OPERATOR
// increamental
console.log("a = a + 1: ", ++a);
// decreamental
console.log("a = a - 1: ", --a);
*/


/*
ASSIGNMENT OPERATORS
let a = 5;
console.log("a = a + 4: ", a += 4);
console.log("a = a - 4: ", a -= 4);
console.log("a = a * 4: ", a *= 4);
console.log("a = a % 4: ", a %= 4);
console.log("a = a ** 4: ", a **= 4);
*/


/*
COMPARISON OPERATORS
let a = 5;
let b = "5";
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a === b", a === b);
console.log("a !== b", a !== b);
// >,  >=,  <,  <=
*/

/*
LOGICAL OPERATORS - AND(&&), OR(||), NOT(!)
let a = 6;
let b = 5;
let cond1 = a > b; // true
let cond2 = a == b; // false
console.log("cond1 && cond2", cond1 && cond2);
*/

/*
TERNARY OPERATOR
condition?true:false
let age = 25;
let result=age>18?"adult":"not adult";
console.log(result);
*/


/*
let expression="banana";
switch(expression){
    case "apple":
        console.log("apple bought");
        break;
    case "banana":
        console.log("banana bought");
        break;
    default:
        console.log("nothing bought");
        break;
}
*/



// PRACTICE QUESTIONS


/*
// TAKE INPUT AND CHECK IF NUMBER IS MULTIPLE OF 5 OR NOT
let number = prompt("Enter a number:");
if(number%5==0){
    console.log(number,"is a multiple of 5");
}else{
    console.log(number,"is not a multiple of 5");
}
*/


/*
function countVowels(str) {
    let count = 0;
    for (const ch of str) {
        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
            count++;
        }
    }
    console.log("Number of vowels in", str, ":", count);
}
*/



function printCounting() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
// printCounting();


function Number(num) {
    console.log("Printing number:", num);
}

function getSum(a, b, c) {
    let sum = a + b + c;
    return sum;
}

let ans = getSum(10, 20, 30);
// console.log("Printing sum:",ans);

function getFullName(firstName, LastName) {
    let fullName = firstName + " " + LastName;
    return fullName;
}

// console.log(getFullName("Bharat","Dhiman"));



// Another way of declaring function is to store function in a variable
const getMultiplication = function (num1, num2) {
    return num1 * num2;
}

// console.log(getMultiplication(10,10));


const getSquare = function (num) {
    return num * num;
}

// console.log(getSquare(5));

// Another way of declaring function is ARROW FUNCTION
const getExp = (num1, num2) => {
    return num1 ** num2;
}
// console.log(getExp(5,5));


//for each loop in array
/*
let arr=[101,102,103,104,105];
arr.forEach(function printVal(val){
    console.log(val);
})
*/

// Another way of for each loop
/*
let arr=[10021,10022,10023];
arr.forEach((val)=>{
    console.log(val);
})

let state=["Punjab","Haryana","Himachal"];
state.forEach((val,index,arr)=>{
    console.log(val.toUpperCase(),index,arr);
})
*/

/*
Higher order functions are functions that take one or more functions as arguments, or return a function as their result.
*/


/*
map(): it calls a provided callbackFn function once for each element in an array and constructs a new array from the results.
*/

// let arr = [1, 2, 3];
// let newArr = arr.map((val) => {
//     return val * val;
// })
// console.log(newArr);


/*
filter(): method creates a new array filled with elements that pass a test provided by a function.
*/
// let arr=["bharat","gautam","ishu"];
// let result=arr.filter((val)=>{
//     return val.length > 5;
// })
// console.log(result);


/*
reduce(): method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
*/

let arr = [1, 2, 3, 4];
let sumArray = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
})
// console.log("Array sum:",sumArray);

let maxArrayElement = arr.reduce((previousValue, currentValue) => {
    return previousValue > currentValue ? previousValue : currentValue;
})
// console.log("Maximum element:",maxArrayElement);

let minArrayElement = arr.reduce((previousValue, currentValue) => {
    return previousValue < currentValue ? previousValue : currentValue;
})
// console.log("Minimum element",minArrayElement);

let marks = [87, 91, 97, 80];
let finalMarks = marks.filter((value) => {
    return value > 90;
})
// console.table({finalMarks});




// create an array from number 1 to n and return sum and product of array.
/*
let num=prompt("Enter a number: ");
let numArray=[];
for(let i=1;i<=num;i++){
    numArray[i-1]=i;
}

let numArraySum=numArray.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue;
})

let numArrayProduct=numArray.reduce((previousvalue,currentValue)=>{
    return previousvalue*currentValue;
})

console.table({numArray});
console.log("Sum of Array elements:",numArraySum);
console.log("Product of Array element:",numArrayProduct);
*/