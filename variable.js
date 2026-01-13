// //const
// const a = 10;
// //a = 20; -- we cannot modify const variables , it can generates a error
// console.log(a)

// //var
// var aa = 10;
// var ab = 20;
// console.log(aa);
// console.log(ab);

// aa = 100;
// ab = 200;

// console.log(aa); //we can able to modify variables values
// console.log(ab);

// //let 
var a = 10;
let b = 30;
{
    var a = 100;
    let b = 20;
    console.log(a);
    console.log(b);   
}

console.log(a,b)
