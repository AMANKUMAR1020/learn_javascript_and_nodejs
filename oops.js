// Topic of today
//abstration -->hiding irrirevenlent data
//inheritance
//pass by value and reference
//coding pratice
/*
"use strict"
let a = "hello";

console.log(a);
*/



// a class can have only one constructor
//you need to define all the a attributes of class in the body of the constructor

/*
"use strict"
class Person{
    constructor(name){
        this.name = name;        
    }

    greet() {console.log(`Hello ${this.name}`);}

}

let person1 = new Person("Aman");
person1.greet();
*/

/*
"use strict"
class Person{
    constructor(name,age,nationality,sal,gen){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.sal = sal;
        this.gen = gen;
    }

    show(){
        console.log(`name = ${this.name}`);
        console.log(`name = ${this.age}`);
        console.log(`name = ${this.sal}`);
        console.log(`name = ${this.gen}`);
        console.log(`name = ${this.nationality}`);
    }
}

 let person1 = new Person(" aman ",23,"ind",364,"M");
person1.show();
*/

/*
"use strict"
class Person{
    constructor(name,age,nationality="pak",sal="2 million",gen="trans"){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.sal = sal;
        this.gen = gen;
    }

    show(){
        console.log(`name = ${this.name}`);
        console.log(`age; = ${this.age}`);
        console.log(`sal = ${this.sal}`);
        console.log(`gen = ${this.gen}`);
        console.log(`nationality = ${this.nationality}`);
    }
}

let person1 = new Person(" aman ",23);
person1.show();
*/
/*
"use strict"
class Person{
    constructor(name,age,nationality,sal,gen){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.sal = sal;
        this.gen = gen;
    }

    show(){
        console.log(`name = ${this.name}`);
        console.log(`age; = ${this.age}`);
        console.log(`sal = ${this.sal}`);
        console.log(`gen = ${this.gen}`);
        console.log(`nationality = ${this.nationality}`);
    }
}
let person1 = new Person(" aman ",23);
person1.show();

let person1 = new Person(" aman ",23);
person1.show();
*/

/*

// Inheritane is called by "extends" keyword 


"use strict"
class Person{
    constructor(name,age,nationality,sal,gen){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.sal = sal;
        this.gen = gen;
    }

    show(){
        console.log(`name = ${this.name}`);
        console.log(`age; = ${this.age}`);
        console.log(`sal = ${this.sal}`);
        console.log(`gen = ${this.gen}`);
        console.log(`nationality = ${this.nationality}`);
    }
}

// let person1 = new Person(" aman ",23);
// person1.show();

class Student extends Person{

}
let student1 = new Student("aman",56,"USA",5646,"M");

student1.show();
*/

/*

"use strict"
class Person{
    constructor(name,age,nationality,sal,gen){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.sal = sal;
        this.gen = gen;
    }

    show(){
        console.log(`name = ${this.name}`);
        console.log(`age; = ${this.age}`);
        console.log(`sal = ${this.sal}`);
        console.log(`gen = ${this.gen}`);
        console.log(`nationality = ${this.nationality}`);
    }
}

class Student extends Person{
      constructor(name,age,collage,branch){

        //super point to the constructor of the parent class
        //using super -> the derived class mimics beheviour of
        //parent class
        
        super(name,age);

        this.name = name;
        this.age = age;
        this.collage = collage;
        this.branch = branch;
    }

    show_stu(){
        console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.collage}`);
        console.log(`${this.branch}`);
    }
}

let student1 = new Student("aman",56,"xyz_college","CS");

student1.show_stu(); */
/*
"use strict"
class Car{
    constructor(name,brand,com="none",total_sales="none"){
        this.name = name;
        this.brand = brand;
        this.com = com;
        this.total_sales = total_sales
    }

    display(){
        console.log(`${this.name}`);
        console.log(`${this.brand}`);
        console.log(`${this.com}`);
        console.log(`${this.total_sales}`);}
}

class Child extends Car{
    constructor(name,brand,engine,transmission,suspension="none",seat,price,yol="none"){
        
        super(name);

        this.engine = engine;
        this.transmission = transmission;
        this.suspension = suspension;
        this.seat = seat;
        this.price = price;
        this.yol =yol;        
    }

    display1(){
        console.log(`${this.engine}`);
        console.log(`${this.transmission}`);
        console.log(`${this.suspension}`);
        console.log(`${this.seat}`);
        console.log(`${this.price}`);
        console.log(`${this.yol}`);               
    }
}

let KIA = new Car("KIA","TOYOTA",0,100);
 KIA = new Child("KIA","4-forse","ih",0,12,99,2022);
KIA.display();
KIA.display1();
*/