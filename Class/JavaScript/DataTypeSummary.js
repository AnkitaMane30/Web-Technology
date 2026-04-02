//non-primitive 
//1.object ,2.array, 3.function,4.String
//symbol is used when we want to give unique id
const anotherId =Symbol("123");
console.log(anotherId);

const id = 123;
console.log(id === anotherId);

//javascript is dynamic lang

//Array
const str = ['A','B','C'];
const num = [10, 20, 30, 40, 50];

//Objects---> key value pairs
const obj = {"name":"Ankita", "Age":20};
console.log(obj.name);

//Functions--->is block of code
//what is function declaration
//what is function defination
function sample(){
    console.log("ankita");
    
}

const myFunction = sample;
console.log(myFunction);

//Memory
//1.stack 2.heap
//stack - It is used for primitive data type 
let myyoutubeName= "AGM";
let newyoutubeName = myyoutubeName;
console.log(myyoutubeName);
console.log(newyoutubeName);

newyoutubeName = "Ankita";

console.log(myyoutubeName);
console.log(newyoutubeName);
//stack memory used for primitive data type,It means copy of value is given
//when we assign a one variable to another variable copy is made ,does not affects the others

//Heap Memory --> used for non-primitive type
//refernce is given
let user1 = {
    "name":"ankita",
    "age":20,
    "ID":306
}

let user2 = user1;
console.log(user1);
console.log(user2);

user2.ID = 6;

console.log(user1);
console.log(user2);

//objects are stored in heap memory
//when we assign one object to another variable reference is cpoied 
//if we change one both variable value will change


