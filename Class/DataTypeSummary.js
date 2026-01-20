//non-primitive 
//1.object ,2.array, 3.function
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