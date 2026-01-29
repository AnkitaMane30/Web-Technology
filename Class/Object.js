//Object Literals
let myObj = {
    name:"Ankita",
    age:20,
    email:"maneankita@gmail.com",
    location:"Sangli",
    isLogin:false,
    loginDays:["monday","Tuesday","wesnesday","Thrusday","friday"],
    "FullName":"Ankita Mane"
}
//there are two type of objects
//1.literals
//2.constructor
//3.singletan
//when you create constructor its create singletan object, it means itself object
//when we create object object literals then singletan is not created

console.log(myObj.email);
console.log(myObj.FullName);
console.log(myObj);
//Symbol Example
const mySymbol = Symbol("Ankita");
const myObj2 ={
    [mySymbol]:"Ankita"
}
//console.log(typeof(myObj2[mySym]));
console.log(myObj2);
console.log(typeof(myObj2));

myObj.email = "ankita@gmail.com";
console.log(myObj.email);
//Object.freeze(myObj)
myObj.email = "ankita831@gmail.com"
console.log(myObj.email);

myObj.greeting = function (){
    console.log("hello js user");
}
console.log(myObj.greeting());
