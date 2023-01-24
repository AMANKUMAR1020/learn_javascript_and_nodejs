/*
let nums = [7,2,1.03,"sudanshu sekher"];
nums[4] = 45;
for(i=0;i<5;i++){
    console.log(nums[i]);
}
console.log(nums[0]);

console.log(nums);
*/

/*
// let value = [5,"navin",{comp: "telusko"},
//             function() {console.log("hi"); }];// note this point it show  [Function (anonymous)]

let value = [5,"navin",{comp: "telusko"},
            function fun () {console.log("hi"); }];// note this point it show  [Function fun ]

console.log(value);//hi

//value[3]();
console.log(value[3]());//show inside function
console.log(value[3]);//show function name only

//we can write --> function  as =>
*/

/*
let value1 = [5,"navin",{comp: "telusko"},
            () => {console.log("hi"); }];// note this point it show  [Function (anonymous)]
        
console.log(value1);//hi
*/


/*
//some important methods 

let value = [9,8,7,6,5,4];
console.log(value.push(3)); // it return size of array
console.log(value);

console.log(value.pop()); //remove last element
console.log(value);

console.log(value.shift()); 
console.log(value);

console.log(value.unshift());// it return size of array
console.log(value);

console.log(value.unshift(1)); // add element in first index
console.log(value);

console.log(value.unshift(2));

console.log(value);

*/

/*
let nums = [];
nums[0] = 9;
nums[99] = 4;
console.log(nums);
//(for in) <=> it work with number and (for of) <=> it work with index

// for (let i in nums)
// console.log(nums[i]);

// for (let i of nums)
// console.log(nums[i]);

*/

/*
let value = [9,5,3,4,7];
console.log(value);

value.splice(0,2);// delete first two element of array
console.log(value);

value.splice(0,2,8);// delete first two and add one element of array
console.log(value);

value.splice();// delete first two and add one element of array
console.log(value);

//value.splice(0);// delete all element of array
//console.log(value);



let value = [9,5,3,4,7,6,8,8,10,0,98,67];

//value.forEach( num => console.log(num));//iterator is occur

// value.forEach( num => console.log(value));//full array is iterate is occur
// value.forEach(
//     num => {
//         if(num %2 == 0)
//         console.log(num)}
// );


// value.filter(function(num){ return num % 2 == 0;}).forEach(num =>console.log(num)
// );

// value.filter(function(num){ return num % 2 == 0;})
// .map(function(num){return num*2;})

// .forEach(num =>console.log(num));

// console.log(value);
*/


/*
//console.log(result1);
let value = [9,5,3,4,7,6,8,8,10,0,98,67];
let result1 =  value.filter(function(num){ return num % 2 == 0;})
.map(function(num){return num*2;})
.reduce(function(sum,num){return sum + num;})
.forEach(num =>console.log(num));
console.log(sum);

//or we can write that 

// let result = value.filter(num => num % 2 == 0)
// .map( num =>num*2)
// .reduce((sum,num) => sum + num,2);
// console.log(result);
*/

/*
let a = 90;
let b = 80;
let c = 70;
let d = 60;
let value = [a,b,c,d]; //array structure
console.log(value);
*/


/*
// let a = 90;
// let b = 80;
// let c = 70;
// let d = 60;
// let value = [a,b,c,d]; 
// console.log(value);

// let value = [9,5,6,245,89,54];

// // let a = value[0];
// // let b = value[1];
// // let c = value[2];
// // let d = value[3];
    
// //     or 

// let [a,b,c, ...d] = value; // array destructure  ,  ....d is a rest operator 
                              //in this reaming all value will be assinge to d 
// console.log(a,b,c,d);

let string = "AMAN KUNDAN KUNAL SAHID SABBU RAMMUY ULLU";

let [x,y, ...z] = string.split(' ');

console.log(x,y,z);
console.log(x);
console.log(y);
console.log(z);

*/

   // reat and spread Operator

function sum(a,b, ...c){ // 'c' as a parameter its rest 
    let result = a + b;

    for( let num of c) result += num;

    return result;
}

let pm = sum(12,4,64,56,4,2,5,9,8);
console.log(pm);

let arr=[1,4,7,2,5,8,3,6,9];
let gm = sum(...arr); //spread because it getting as an argument