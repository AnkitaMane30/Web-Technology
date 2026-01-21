//Array 
let arr = [0,1,2,3,4,5];
console.log(`Array Values ${arr}`);
console.log(typeof(arr));

const myArr = new Array(0,1,2,3,4,5);
console.log(myArr[1]);

//Array Methods
arr.push(6); //Add values in Array
console.log(arr);

arr.pop(); //Removes last element from array
console.log(arr);

arr.unshift(9); //It shifts all element and added at 1st position --used at company level mostly
console.log(arr);

arr.shift() //it removes the first element
console.log(arr);

console.log(arr.includes(4));//It checks the value present in the array or not

console.log(arr.indexOf(4)); //It displays the index number of passed value

//Activity - sclice and split 
