//MATH
/*
var result1 = Math.ceil(4.6);//5
console.log(result1);
var result2 = Math.ceil(-3.4);//-3
console.log(result2);
var result3 = Math.ceil(-3.1);//-3
console.log(result3);

var result1 = Math.floor(4.6);//4
console.log(result1);
var result2 = Math.floor(-3.4);//-4
console.log(result2);
var result3 = Math.floor(-3.1);//-4
console.log(result3);

var result1 = Math.round(4.4);//4
console.log(result1);
var result2 = Math.round(4.5);//5
console.log(result2);
var result3 = Math.round(4.6);//5
console.log(result3);

// NOTE:-no impact on negetive sign
var result1 = Math.round(-4.4);//-4
console.log(result1);
var result2 = Math.round(-4.5);//-4
console.log(result2);
var result3 = Math.round(-4.6);//-5
console.log(result3);

//NOTE:- remove all value after point(.) //trunc=>means rounding to zero
var result1 = Math.trunc(4.407980);//4
console.log(result1);
var result2 = Math.trunc(-8.5676);//-8
console.log(result2);
var result3 = Math.trunc(-1.999);//-1
console.log(result3);

var result = Math.max(10,45,69,78,25);//78
console.log(result);

var result = Math.min(10,45,69,78,25);10
console.log(result);

var result = Math.sqrt(25);//5
console.log(result);

var result = Math.cbrt(4);//64
console.log(result);

var result = Math.pow(2,5);//32
console.log(result);

var result = Math.PI;//32
console.log(result);

var result = Math.abs(-2);//change -ve to +ve
console.log(result);
*/




//        REGULAR----->>>>>>> Regex

/*
var a="AINEURON";
var regex = /[A-Y]INEURON/;

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

var a="ZINEURON";
var regex = /[A-Y]INEURON/;

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

var a="aINEURON";
var regex = /[A-Y a-y]INEURON/;//regex is case sentitive

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

var a="zINEURON";
var regex = /[A-Y a-y]INEURON/;
if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

or we can write that

var a="zINEURON";
var regex = /[A-Y]INEURON/i;
//or
//var regex = /[A-Y a-y]INEURON/;


if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}


// var a="8INEURON";
// var regex = /[0-8]INEURON/;

var a="8INEURON";
var regex = /[^0-8]INEURON/;//(^)accept up to 8 only remaining intial(0)  

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

//  var a="6996465580";
//  var regex = /[0-6][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
// or we can write that
var a="6996465580";
var regex = /[0-6][0-9]{9}/;
if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

// var a="rgheiur6996465580";
// var regex = /[0-6][0-9]{9}/;

// in both case it show valid which is wrong  -- >> show we use (^)

var a="6996465580ekfhw";
var regex = /[0-6][0-9]{9}/;
if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}

// var a="sjdsduj6996465580";
// var regex = /^[0-6][0-9]{9}/;

var a="6996465580liwhef";
var regex = /[0-6][0-9]{9}^/;

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}
// var a="sjdsduj6996465580";
// var regex = /^[0-6][0-9]{9}/;

var a="6996465580liwhef";
var regex = /[0-6][0-9]{9}^/;

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}


var a="6996465580l";
var regex = /[0-6]\ds{9}/;

if(regex.test(a)){
    console.log("valid");
}
else {
    console.log("invalid");
}


// syncronous and asyncronous function

//example of syncronous
console.log("one");
console.log("two");
console.log("three");

//example of asyncronous
console.log("one");
setTimeout(() => {console.log("two");},0)
console.log("three");


const func1 = () =>{
    console.log("func1 is starting");
    func2();
    console.log("fun1 is end");
}
func2 = () => {
    setTimeout(() =>{console.log("func1 is starting");},2000 );
}
func1();

//create a promise
let promise = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        resolve("----promise is occur complete");
    },2000);
});

// if it resive the promise then
const grandParentCooking = () =>{
    promise.then(function(result){
        console.log(`remaing part is occuring along with ${result}`);
    });
};

grandParentCooking();


let promise = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        //throwing an error
        reject(new Error("---- promise is failed"));
    },2000);
});

// if it resive the promise then
const grandParentCooking = () =>{
    
    promise.catch(function(error){
        console.log(`sorry promise is not work ${error.message}`);
    })
};

grandParentCooking();

*/

// HOME WORK 