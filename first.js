/*
num = 3
console.log(num)
num = 7
console.log(num)
// this is comment 
*/

/*
num = 7 //num
console.log(num)

num = "seven" //string
num = 'seven' //string

console.log(num)

// javaScript is case sentitive--->>>>>
Age = 90;
age =5;
console.log(age)
*/

// <<--- Data veriable ((by only write "use strict"))--->>
/*
"use strict"
// yes due to "use strict" it give error because we no use 'let' datatype
num = 7 //num
console.log(num)

num = "seven" //string
num = 'seven' //string

console.log(num)

// javaScript is case sentitive--->>>>>
Age = 90;
age =5;
console.log(age)
*/

/*
"use strict"

let num = 7 //num
console.log(num)
 num = "seven" //string //here use of let give error
console.log(num)
let Age = 90;
let age =5;
console.log(age)
*/

/*
"use strict"
let str = "aman";
let dbl = 5.36;
let num1 = 7;
num1 += 2;

let num2 = 2;
num2++;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1, typeof num1);
console.log(str , typeof str);
console.log(dbl ,typeof dbl);
*/

 /*
// type conversion
"use strict"
let value = Number("1254"); //changing string to integer

console.log(value);
console.log(typeof value);

let check = Number("1254 mana"); //changing strint to integer

console.log(check);
console.log(typeof check);
// it give NaN - Not a Number (or say number which not define)

let Value = parseInt("1254 mana"); //fetch to give number only 

console.log(Value);
console.log(typeof Value);
*/
/*
//true or false
"use strict"
let num1 = 8
let num2 = 7

let result = num1 > num2
console.log(result);

result = num1 < num2
console.log(result);

result = num1 == num2
console.log(result);

num2 = "8"
result = num1 == num2// == compare the value not type
console.log(result);

result = num1 === num2// === compare the value as well as type
console.log(result);

num1 = "one";
num2 = "two";
result = num1 < num2 //only compare string
console.log(result);

num1 = 10;
num2 = 20;
result = num1 + num2 //only compare string
console.log(`The addition of ${num1} and ${num2} is ${result}`);
console.log(`sum of given ${num1} and ${num2} is ${result}`);

//${x} <-- is used to show the value of x
*/
/*
"use strict"
let num = 3;
if(num%2 == 0){
   console.log(`${num} Even`);}
else{
   console.log(`${num} odd`);}
*/
/*
"use strict"
let num1 = 4;
let num2 = 9;
let result = ""

if(num1 > num2){
   result = "Even";}
else{
    result = "Odd";}
    
    console.log(result);
*/

/*
"use strict"
let num1 = 4;
let num2 = 9;
let result = ""

result = num1 > num2 ?"Even" : "Odd";
console.log(result);
*/

/*
"use strict"
let num1 = 6;
let num2 = 9;
let num3 = 3;

if(num1 > num2 && num1 > num3){
   console.log(`${num1}`);}
else{
   console.log(`${num2}`);}
*/
/*
"use strict"
let num1 = 456;
let num2 = 9;
let num3 = 3;

if(num1 > num2 && num1 > num3){
   console.log(`${num1}`);}

else if(num2 > num3){ 
   console.log(`${num2}`);}
else{
    console.log(`${num3}`);}
*/
/*
"use strict"
let i = 5;
while(i--){
    console.log(i);
}
*/











//>>>>>>>>>>>          ASSINGNMENT

/*
"use strict"
//document. getElementById("Enter first number");
const num1 = prompt("Enter first number");
const num2 = prompt("Enter sceond number");
console.log("Enter operation\n 1.Add 2.Sub 3.Mul 4.div");
let x = prompt("Choose a the above one");

if(x == 1 || x== '+'){
console.log(num1 + num2);}

else if(x == 2 || x== '-'){
console.log(num1 - num2);}

else if(x == 3 || x== '*'){
console.log(num1 * num2);}

else if(x == 4 || x == '/'){
console.log(num1 / num2);}
else{
    console.log("Invalid number");
}
*/
/*
"use strict"
let i=101;
while(i--){
    i%2?' ':console.log(i);
}
*/
/*
"use strict"
let i=101;
while(i--){
    if(i%2 == 0){
console.log(i);
    }
}
*/