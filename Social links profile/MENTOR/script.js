console.log("This is a class");


let value1= 15;
let value2= 10;


console.log(value1 + value2); //addition
console.log(value1 * value2); //multiplication
console.log(value1 - value2); //subtraction
console.log(value1 / value2); //division

const firstname="Bunmi"
const lastname="Ogundipe"

console.log(firstname + " " + lastname)

let numberofstudents=45;
console.log(`I have ${numberofstudents} students in my class`)



let a = "10";  
let b = 20;  
console.log(a + b);  

///const colors=  ["green","red","yellow","Blue"]
//console.log(colors[0]);
//console.log(colors.length);
//console.log(colors.reverse());

const address= {
    street:"123 ayeni estate",
    city:"ilesha",
    state:"osun",
    housenumber:23,
    ispainted:true,
}

console.log(address.street);
console.log(address.city);
console.log(address.state);

let thirdname="adedayo"
let fourthname="ayoola"
console.log(`My third name is ${thirdname} and my fourth name is ${fourthname}`);

//assignment operators
let age=25;
age +=20;
console.log(age);

//comparison operators
let val1=20;
let val2=30;
let val3="20"

console.log(val1 == val2) // == will check for value
console.log(val1 == val3)
console.log(val1 === val3) // === wil check for value and data type

console.log("#######")
console.log(val1 != val2)
console.log(val1 != val3)
console.log(val1 !== val2)
console.log(val1 !== val3)

console.log("###########")
console.log(val1 > val2)
console.log(val2 < val3)
console.log(val1 >= val2)
console.log(val1 >= val3)
console.log(val1 <= val2)

//logical operators
//logical AND

let num1=5;
let num2=3;
let num3=8;

let result = num2 < num1 && num1 > num3;

console.log(result + " for logical AND")
 
//logical OR
let res=num2 > 5 || num1 === 1 || num3 > 5
console.log(res)

//logical NOT

console.log(true)
console.log(!true)

const person={
    firstname:"Victoria",
    lastname:"Ogundipe",
    phonenumber:"08012345670",
    age:34,
    hobbies:['Reading books', 'watching TV',"Sleeping" ],
    address:{
        street:"123 ayeni estate",
        city:"ilesha",
        state:"osun",
        country:"nigeria",
    }
}

console.log(person.firstname,person.lastname,person.age)
console.log(`My favourite hobby is ${person.hobbies[0]}` )
console.log(`I live in ${person.address.street}, ${person.address.city}, ${person.address.state}`)

const colors =["green", "yellow", "blue", "pink","orange","purple","white"];

console.log(colors.length);
console.log(colors[0]);

colors.push("grey");  //a function in javascript
console.log(colors)

colors.pop();  //a function in javascript-to remove the last element ot the array
console.log(colors);

colors.shift(); //removes the first elememt from an array
console.log(colors);

colors.unshift("beige"); //adds element to the beginning of the element
console.log(colors);

colors.reverse();
console.log(colors);

console.log(colors.join(","));
console.log(colors.join("_"));
console.log(colors.join(" and "))



