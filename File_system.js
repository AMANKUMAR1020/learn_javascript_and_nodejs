// file sysytem module
//reading files,writing inside files
//perform calcutions or modification
//text files
//reading file

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
*/

/*
const fs = require("fs");
fs.readFile("demo.txt",'utf-8',(err,data)=>{
    if(err){
        throw err.name;
    }

    else{
        console.log(data);
    }
})
*/

/*
const fs = require("fs");
const path = require("path");

fs.writeFile("demo1.txt","this is my new file creating with help of write.js file",(err)=>{
    console.log("File is saved successfully thank you !!!");
    
    if(err){throw err.name;}

})

console.log(__dirname);//c:\Users\Aman\__javaScript__
console.log(__filename);//c:\Users\Aman\__javaScript__\File_system.js
*/


/*
const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname,"demo2.txt"),"this is my new file creating with help of write.js file",(err,data)=>{   
    if(err){throw err.name;}
    else{ console.log(data);}
})
*/

//local module are imported by ./ referncing
const test = function(){
    console.log("this is just a test case to check local modules");
}

module.exports=test;
//if we have to add multiple mudules , we are using array[];
//eg:- module.exports={test,siufg,nwkje,pqwur,ici};