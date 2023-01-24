/*
async function f(){
    return 1;// it give same answer return 0;/return -1;
}
f().then(console.log(`success`));

async function f(){
    let promise = new Promise((resolve,reject) =>{
        setTimeout(() => resolve("done"),1000)
    });

    let result = await promise; // 
    console.log(`success -- ${result}`);
}

f();
*//*

const getTimeClock = () => {

    // Date- get current time
    //current year/hours/min/sec
    return new Date().getHours()+":"+ new Date().getMinutes()+":"+new Date().getSeconds()
};


function getSynchronousMsg(){
    return "hello";
}

function getHelloFromAPromise(){
    return Promise.resolve('Hello-promise');
}

function getHelloFromAPromise(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve('Holla');},4000);
    });
}


async function caller(){
    const MessageHello =await getSynchronousMsg();
    console.log(getTimeClock(),MessageHello);


    const MessageHelloPromise = await getHelloFromAPromise();
    console.log(getTimeClock(),MessageHelloPromise);

    
    const MessageHolla = getHollaWithDelay();
    console.log(getTimeClock(),MessageHolla);

}

caller();
*/


var a=Symbol("Alien");
var b=Symbol("Alien");
console.log(a==b);
console.log(typeof(a));

var c="Alien";
var d="Alien";
console.log(c==d);
console.log(typeof(d));

let age=Symbol("age");//age=Symbol();

let user ={
    name:"aman",
    qui:"Engg.",
    [age]:28
};

console.log(user);

console.log(user.name);
console.log(user.age);
console.log(user[age]);

console.log(JSON.stringify(user));// object to JSON conversion