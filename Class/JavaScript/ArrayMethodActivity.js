//Sclice
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.

const arr = [10, 20, 30, 40, 50];
//Slice out a part of an array starting from array element 3:
console.log(`Sclice from index 3 - ${arr.slice(3)}`);

//The slice() method can take two arguments like slice(1, 4).
//The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log(`Sclice from index 1 to 4 - ${arr.slice(1,4)}`);

//splice
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:

const fruits = ["Apple","Banana","Mango","Orange"];
console.log(`Fruits - ${fruits}`);
console.log(`Using splice - ${fruits.splice(2,1,"Kiwi","Cherry")}`);
console.log(`Fruits after using splice - ${fruits}`);

const num = [10, 20, 30, 40, 50];
console.log(`Numbers -${num} `);
console.log(`Using splice - ${num.splice(1,1)}`);
console.log(`After splice - ${num}`);


//toSpliced
//the difference between the old splice and toSpliced method is the old splice method after splicing the array became changed
//But with toSplice after we use toSplice method the original array value became a unchanged

const month = ["jan", "feb", "march", "april", "may"];
console.log(`Months - ${month}`);
console.log(`Using toSpliced - ${month.toSpliced(1,1)}`);
console.log(`Using toSpliced add june - ${month.toSpliced(1,1,"June")}`);

//split
//Split the words:
const text = "How are you Today?";
const myText = text.split(" ");
console.log(myText);

//Split the words, and return the second word:
const mT = text.split(" ");
console.log(mT[1]);

//Split the characters, including spaces:
const mT2 = text.split("");
console.log(mT2);

//Use the limit parameter:
const mT3 = text.split(" ", 3);
console.log(mT3);


