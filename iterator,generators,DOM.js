/*
var c=["javascript","nodejs","reactjs","blockchain"];

// for(let i=0;i<c.length;i++){
//     console.log(c[i]);
// }

let g = c[Symbol.iterator]();

//console.log(typeof c[Symbol.iterator]());

var  x=g.next();
console.log(x);//{ this give the value: 'javascript', and this give the weather it last or not done: false }

var y=g.next();      //{ value: 'nodejs', done: false }
console.log(y);

//to print only value
//var z=g.next().value;
console.log(g.next().value);

var str1 = "Aman kumar";
var itr1 = str1[Symbol.iterator]();
var res = itr1.next();

while(!res.done){
    console.log(res.value);
    res = itr1.next();
}


//generator function

// yeild() -> pouse the statment 
function *disp(){

    console.log("Hey");
    yield 1;//yield "second pause";
    console.log("How");
    yield 10+10;//yield "third pause";
    console.log("are");
    yield 10+10;//yield "forth pause";
    console.log("you");
    yield 10+10;//    yield "T";
    console.log("?");
}

disp();

var control = disp();
control.next();
control.next();
console.log(control.next());
console.log(control.next());


*/