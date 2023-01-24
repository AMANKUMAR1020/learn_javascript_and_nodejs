/*
const fs = require("fs");

fs.readFile("demo.txt",(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data);
    }
})

// it give answer in hexadecimal format 

*/
/*
const fs = require("fs");

fs.readFile("demo.txt",(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data.toString());
    }
})

// it give answer in String format 
*/

/*
const fs = require("fs");

fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data.toString());
    }
})
// it give answer in String format 

*/

/*
const fs = require("fs");
fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }
    else{
        console.log(data.toString());
    }
})

//asynchronous nature ensure non blocking io

process.on("uncaughtException",err=>{
  console.error('there is some uncaught error that needs to be checked ${err}');
  process.exit();
})

*/

