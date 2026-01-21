const superHeroes = ["Aaaaaa","Bbbbbb","Cccccc","Ddddd"];
const values = ["Ankita","siddhi","Anu"];
superHeroes.push(values);
console.log(superHeroes);

console.log(superHeroes[2]);
console.log(superHeroes[3][1]);

//Array concat
const concatArr = superHeroes.concat(values); //Both array value combined in one array
console.log(concatArr);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]; //Nested Array
console.log(anotherArr);
console.log(anotherArr.length);
console.log(anotherArr.indexOf(3));

const anotherArr1 = anotherArr.flat(Infinity); 
console.log(anotherArr1);

const anotherArr2 = anotherArr.flat(1);
console.log(anotherArr2);

//flat - specify the how the nested arrays flated, default value is 1,
//infinity -flatnes all levels no matters how deep
//flat does not change original array it returns new array useful when working with nested data

//Data scripting using this method
console.log(Array.isArray("Ankita")); // to check given values is array or not 
console.log(Array.isArray(values));

console.log(Array.from("Ankita"));// convert an iteratable objects like string, set, map, into an array.

console.log(Array.from({"name":"Ankita"}));

console.log(Object.keys({"name":"Ankita"}));

console.log(Object.values({"name":"Ankita"}));

console.log(Object.entries({"name":"Ankita"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // create new array from given vlaues no matter how many
//of-->coverts values to array
//from--->converts iteratable to array

//IQ - difference between of and from 
