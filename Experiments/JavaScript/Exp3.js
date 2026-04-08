//Function is block of code , that is used for reusability
function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

//let addition = addTwoNumbers(10,20);
//console.log(addTwoNumbers(10,30));

function add(num1, num2){
    let result = num1 + num2;
    return result;
    //console.log("Addition of Nums"+ result);//after return statement there is no any scope
    
}
add(10, 20);

function loginUser(userName){
    if(userName === undefined){
        console.log("please enter username");
        return;
    }
    return `${userName} just login`;

}
console.log(loginUser("Ankita")); // when your string is empty then its gives undefined

function calPrice(...num1){//spread operator/rest operator - all arguments passed to this function parameter that accept in the form of array 
    return num1;
}
console.log(calPrice(100,200,300));

const userName = {
    name : "Ankita",
    age : 20
};
function handleObject(obj){
    console.log(`user name is ${obj.name} and age is ${obj.age}`);
    
}
handleObject(userName);
const myArr = [200, 300, 400];
function handleArray(arr){
    console.log(`Array elements ${arr}`); 
    console.log(`ele 0 :${arr[0]} , ele 1:${arr[1]}, ele 2:${arr[2]}`);
    
}
handleArray(myArr);

// activity 1--->wac for arrow function with 2 examples
//2---> wac for switch case
//3---> how to use truthy values and falsy values with example
//4---> how to use ternary operator in js
//5--->wac for how to use loops in array
//6---> difference between for in and for of
//7--->how to use map and filter in javascript