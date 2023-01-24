/*
"use strict"
let student = new Object();
student.name = "aman";
student.edu = "b.tech";
student.roll = 90;
student.age = 19;
student.subject = ["phy","chem","maths"];

student.subject =["hin","eng","math"]; // due to dynamic allocation

console.log(student);
*/
/*
//creating a constrution in function
//utilise the function to body as a object
"use strict"
function student(name,age,yop,high_qual,dob){
    this.name = name;  // it is equal to this.name = name <=> student.name = name
                    // "this" keyword is used as a pointer 
                    // ye pointer ki tarah kam kar raha hai
                    // jo "name" object "student" ko point kar hai
    this.age = age;
    this.high_qual = high_qual;
    this.yop = yop;
    this.dob = dob;
    console.log("Hello");
}

let obj = new Object();

obj.name = "sanjeevan";
obj.yop = 2023;
obj.age  = 23;
obj.high_qual = "B.tech";
obj.dob = 1997;
*/


/*
"use strict"
function student(name,age,yop,high_qual,dob){
    this.name = name;
    this.age = age;
    this.high_qual = high_qual;
    this.yop = yop;
    this.dob = dob;
    console.log("Hello khana kha ke jana haa");}
 
    //object_type obj_name = new(initaillization keyword) construtor
    let student1 = new student("Naveen","35",2012,"PHD",1980); 

    console.log(student1);
//output is
// Hello
// student {
//   name: undefined,
//   age: undefined,
//   high_qual: undefined,
//   yop: undefined,
//   dob: undefined
// }

let student2 = new student("Aman",45,2025,"B.tech",2003);
console.log(student2)

let student3 = new student("kunal",5,225,"B.tadech",203);
console.log(student3)

*/