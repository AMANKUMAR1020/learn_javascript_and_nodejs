// loop - 'while' , 'do { } while' and 'for' loop;

// Switch
/*

"use strict"
let x = "sat";
switch(x){
    case "sat": case "sun":
        console.log("6am");
        break;

    case "wed":
    case "fri":
        console.log("7am");
        break;

    case "thur":
    case "mon":
        console.log("5am");
        break;    
}
*/
/*
//continue
"use strict"
let i=0;
while(i<6)
{
    i++;
    if(i > 6 )
    continue;
    console.log(i);
}
let j=1;
while(j){
    if(j<6){
        j++;
        continue;
    }
    if(j>10) break;
    console.log(j--);

}
*/

/*
//  function 
//name -> is resereved word
aman()

function aman()
{
    let nam ="amna";
    console.log(nam);
}
*/
/*
let num1=10;
let num2=40;

function add(n1,n2)
{
    console.log(n1+n2);
}

add(num1,num2);
*/
/*
"use strict"
let num1,num2;
function add(num1,num2,num3=0,num4=0){
    return num1+num2+num3+num4;
}
console.log(add(7,8,9));
*/
/*
let num1=10;
let num2=40;

function add(n1,n2,n3=0)
{
    return n1 + n2 + n3;
}

let result = add(num1,num2);
console.log(result);
*/

// OOP's
//objects
/*
let empty={}; //initialise the object

console.log(empty);
*/

/*
let point={x:0 , y:0};
lest p1={x: point.x , y: point.y};
console.log(p1);

let p2={x: point.x , y: point.y + 1};
console.log(p2);

let p3={x: point.x , y: point.y + 4};
console.log(p3);
*/
/*

let book={      //initialise the object
"title" : "abc",
"author" : "xyz",
"year" : 2018,
"sell" : 1000
}

console.log(book);
console.log(book.year);
console.log(book.auther);
*/
/*
let book = new Object();  //initialise the object
book.title = "Harry Poster";
book.author = "JK Rowling";
book.page = 400;
book.publisher = "Bloomsbury";
book.year = 1997;

console.log(book);
console.log(book.year);

book.pages = 600;
book["author"] = "sanjeevan";

console.log(book.author);
*/

/*
let obj = Object.create({x:1,y:2}); //Initialise the object
let o2 = obj.x * obj.y;
console.log(o2);
*/

/*  

//it is incapsulation
//In JavaScript Arrays and Objects are not immutable.
//Their values can be changed over time. 
//Both are always passed as a reference and the
//vast majority of available methods mutate data in place


const mycar = new Object();
mycar.company = "BMW";
mycar.model = "XS";
mycar.color = 2019;
mycar.engine = "VB";
mycar.price = 20000;
mycar.fuel = "petrol";

console.log(mycar);

mycar.color = 2022;
mycar.engine = "BJ";
mycar.price = 90786;

console.log(mycar);
*/

let std = new Object;
std.name = "aman";
std.class = 10;
std.subject = "math";
std.age = 19;

console.log(std);

/*
let std = new Object;
std.name = "aman";
std.class = 10;
std.age = 19;
std.subject = {
    "Name":"math", // Name:"math" -> it is also correct
    "mark":89  // mark:89 -> it is also correct
};

console.log(std);
*/