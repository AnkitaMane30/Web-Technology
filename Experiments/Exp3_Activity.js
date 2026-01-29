//Exp3_Activity
//activity 1--->write a code for arrow function with 2 examples
console.log("Activity 1--> Arrow Function");
//1
const square = (n) => {
    return n * n;
}
console.log("Square of Number:"+square(2));
//2
const obj =()=> ({name : "Ankita"});
console.log(obj());
console.log();

//2---> write a code for switch case
console.log("Activity 2--> switch case");
function switchCase(day){
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
        default:
            console.log("Enter valid choice between 1-7");
            break;
    }
}
console.log("Day is :");
switchCase(1);
console.log();

//Activity 3---> how to use truthy values and falsy values with example
console.log("Activity 3-->Truthy values and Falsy Values");
//Truthy
console.log("Truthy-");
if (42) console.log("This is truthy!");
if ("hello") console.log("Non-empty strings are truthy!");
if ({}) console.log("Objects are truthy!");
//Falsy
console.log("Falsy-");
if(0)console.log("This won't run because 0 is falsy");
if("")console.log("This won't run because an empty string is falsy.");
if(null)console.log("This won't run because null is falsy.");
//Logical Operators with Truthy and Falsy
console.log("Logical Operators with Truthy and Falsy");
console.log(true && "Javascript"); //javascript
console.log(false && "java"); //false
console.log("java"&& false);  //false
console.log(0 && null);       //0
console.log("Hello"||false ); //hello
console.log(false||"helloo"); //helloo
console.log(0||null);         //null
console.log({}||"hello");     //{}
console.log();

//Activity 4---> how to use ternary operator in js
console.log("Activity 4 -->Ternary Operators");
let marks = 75;
let result = (marks > 40)? "pass" : "Fail";
console.log(`Student is ${result}`);
console.log();

//Activity 5-->write a code for how to use loops in array
console.log("Activity 5 -->Loops in Javascript");
let arr = [10,20,30,40,50]
let i = 0;
let n = arr.length;
console.log("While Loop");
while(i < n){
    console.log(arr[i]);
    i++;
}
console.log("do-while Loop");
let idx = 0;
do{
    console.log(arr[idx]);
    idx++;
}while(idx < n);
console.log("for loop");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log("ForEach loop");
arr.forEach(function(nums){
    console.log(nums);
});
console.log("For-in-loop");
const person = {name:"Ankita",age:20};
for(let val in person){
    console.log(val+":"+person[val]);
}
console.log("for-of-loop");
let sum = 0;
for(let val of arr){
    sum += val;
}
console.log(`Sum of Array ${sum}`);
console.log();

//Activity 6 -->how to use map and filter in javascript
console.log("Activity 6--> map and filter");
const nums = [1,2,3,4,5,6,7,8];
nums.filter(even => even % 2 == 0).map(square => square*square).forEach(value => console.log(value));









