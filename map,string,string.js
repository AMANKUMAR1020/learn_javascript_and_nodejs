      // SET
/*    
let set = new Set();
let array = new Array();
set.add(5);
set.add(4);
set.add("Aman");
set.add("aman");

console.log(set);

set.delete(4);

for(let i=1;i<=20;i++){
    let num = Math.ceil(Math.random()*100);
    array.push(num);
    set.add(num);
}
console.log(set);
console.log(array);
console.log(set.size);
*/

/*

//   MAP

let map = new Map();
map.set("Navin","java");
map.set("hyder","JS");
map.set("Sanjeevan","Blockchain");
map.set("Navin","Edge Computing");

//console.log(map);

//map.forEach((v,k) => console.log(v));
map.forEach((v,i,values) => console.log(v,i)); //v=value, i=index value, values=array value;

*/

/*

 // callbacks,higher-order function,clousre

//  console.log("Wel come");

//  setTimeout(() => console.log("get out") , 3000);

function add(a,b,handle)
{
    let result = a + b;
    handle(result);
}

function print(result)
{
    console.log("printing" , result);
}

function sendRequest(result){
    console.log("sending data to server ", result);
}

add(4,5,print);
add(6,9,sendRequest);

*/

/*  result act as a variable as well as function
function outer(){
    console.log("outer");
    return function(){
        console.log("inner");
    };
}

let result = outer();

result();

*/


//closure
/*
function outer()
{
    let num1 =20;
    console.log("outer ",num1);
    return function(){
        let num2 = 10;
        console.log("inner ",num2,num1);
    };
}

let result = outer();//it call the outer function only
 // result = outer => intire function is going to result

result(7);
*/
/*
function outer(num3)
{
    let num1 =20;
    console.log("outer ",num1);
    return function(num3){
        let num2 = 10;
        console.log("inner ",num2,num1,num3);
    };
}

let result = outer();//it call the outer function only
 // result = outer => intire function is going to result

result(7);
*/


var str ="a my home at matigarh by";
//var a=str.length;
//console.log(a);
// console.log(str.toUpperCase());// change to upper case

// var small=str.toLowerCase();// change to lower case
// console.log(small);
// var  bool = str.includes("at");// true OR false <=> weather the element is present or not
// console.log(bool);
// var  bool = str.endsWith("by");// true OR false <=> end with string or lastletter 
// console.log(bool);
// var  bool = str.endsWith("y");// true OR false <=> end with string or lastletter 
// console.log(bool);
// var a=str.match(/at/g);
// console.log(a);
// var a=str.match(/at/);
// console.log(a);
// var a=String.fromCharCode(89);
// console.log(a);
// var a=str.charAt();
// console.log(a);
// var a=str.charAt(); // give char at that index
// console.log(a);

// var str1="aman ";
// var str2="kumar";
// var str3=" ";
// var c = str3.concat(str1,str2);
// console.log(c);

// var a ="  javasript   ";
// var b = a.trim();
// console.log(b);

//note:-slince is rotetary index
//  var c = str.slice(2,9);// cut intail index(3) to final index(8)
//  console.log(c);
// var c = str.slice(-1);// locate last index;
// console.log(c);
// var c = str.slice(-3,);// locate last_index-3;
// console.log(c);
// var c = str.slice(-6,-2);// locate last_index-6;
// console.log(c);

// var c = str.substring(2,9);// cut intail index(3) to final index(8-1)
// console.log(c);
//var c = str.substr(2,7);// cut inttail index(3) and print only index(7)
//console.log(c);

//var a = "javascript";
// var c = str.split(" ");//it split and fill into array in " " interval
// console.log(c);

var a =10;
var c=a.toString();// change data typr into string
console.log(c+" "+a);

var str1="Javascript is a good is lang";
//var c = str1.replace("Javascript","cpp");//it replace the string

var d = str1.replace(/is/g, "are");
console.log(d);
