//Activity 1 ---Array, string, function, object declaration 
console.log("Activity 1 ---->");
//Array
const arr = [10,20,30,40,50];
console.log(arr);

//Function
function myFunction(){
    console.log("This is my Function"); 
}
myFunction();

//Object
const obj = {
    "name":"Ankita",
    "age":20,
    "ID":306
}
console.log(obj);

//String
let str = "Ankita";
console.log(str);

//Activity 2---find largest number in string

//Activity 3 --->rever a string 
console.log("Activity 3---->");
let myStr = "Ankita";
let reverString = "";
for(let i = myStr.length-1; i >= 0; i--){
    reverString += myStr[i];
}
console.log(reverString);

//Activity 4 -- check palindrome string
console.log("Activity 4---->");
let myString = "aaa";
let reverseString = "";
for(let i = myString.length-1; i >= 0; i--){
    reverseString += myString[i];
}
if(myString === reverseString){
    console.log(`string is palindrome`);
}
else{
    console.log(`string is not a palindrome`);
}
//Activity 5 ---fibonacci series 
console.log("Activity 5---->");
function fibonacci(num){
    let a = 0;
    let b = 1;
    console.log("Fibonacci Series");
    for(let i = 1; i <= num; i++){
        console.log(a);
        let sum = a + b;
        a = b;
        b = sum; 
    }
}
fibonacci(5);

//Activity 6---> count vowels in string
console.log("Activity 6--->");
let vowel = "Ankita";
let count = 0;
for(let i = 0; i < vowel.length; i++){
    if(vowel[i] === 'A' || vowel[i] === 'E' || vowel[i] === "I" || vowel[i] === "O" || vowel[i] === "U" || vowel[i] === "a" || vowel[i] === "e" || vowel[i] === "i" || vowel[i] === "o" || vowel[i] === "u"){
        count = count + 1;
    }
} 
console.log("Number of Vowels : "+count);

//Activity  7-- find largest element in array
console.log("Activity 7---->");
let nums = [10,20,30,40,50];
let maxNum = -Infinity;
for(let i = 0; i < arr.length; i++){
    if(maxNum < nums[i]){
        maxNum = nums[i];
    }
}
console.log(`Maximum number is ${maxNum}`);

//Activity 8-----remove duplicate number from array
console.log("Activity 8--->");
let arr1 = [1,2,3,2,4,1,5,3];
for(let i = 0; i < arr1.length; i++){
    for(let j = i+1; j < arr1.length; j++){
        if(arr1[i] == arr1[j]){
            arr1.splice(j,1);
            j--;
        }
    }
}
console.log(arr1);

//Activity 9----find missing number in array
console.log("Activity 9---->");
let arr2 = [1,2,3,5,6,7,8];
function missingNumber(arr2){
    let n = arr2.length + 1;
    let sumOfFirstN = (n * (n + 1))/2;
    let sumarray = 0;
    for(let i = 0; i < arr2.length; i++){
        sumarray +=  arr2[i]
    }
    let missingNum = sumOfFirstN - sumarray;
    return missingNum;
}
let missing = missingNumber(arr2);
console.log(`Missing No is : ${missing}`);


//Activity 10-----function to find even or odd
console.log("Activity 10--->");
function evenOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is Even number`);
    }
    else{
        console.log(`${num} is Odd number`);
    }
}
evenOdd(20);
//Activity 11----sum of array
console.log("Activity 11---->");
function sumOfArray(values){
    let sum = 0;
    for(let i = 0;i < values.length; i++){
        sum += values[i];
    } 
    return sum;
}
let values = [10,20,30]
console.log(`Sum of Array: ${sumOfArray(values)}`);
