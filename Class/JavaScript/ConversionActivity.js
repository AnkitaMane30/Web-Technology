//Primitive Data Type
//Number
let a = 10;
let b = -20;

//BigInt
let x = 12345678923467;
let y = BigInt(16214480359056653);

//String
let name = "Ankita";
let lastName = "Mane";

//Boolean
let p = true;
let q = false;

//undefined
let r;
let s;

//Null
let aa = null;

//Symbol
let ss = Symbol();
//console.log(ss);
//console.log("Type of Symbol is: "+typeof(ss));

//Non-Primitive Data Type
//object
let obj = {"name":"Ankita", "age":21};
//console.log(obj);

//Conversion
let num_string = String(a);
console.log("Number to String Conversion " +num_string);
console.log(typeof(num_string));
let num_bool = Boolean(b);
console.log("Number to boolean Conversion "+num_bool);
console.log(typeof(num_bool));
//let num_undefined = undefined(a); ----> not possible
//console.log("Number to Undefined "+num_undefined);
//console.log(typeof(num_undefined));
//let num_null = null(a);-----> not possible
//console.log("Number to Null "+num_null);

let str_num = Number(name);
console.log("String to Number Conversion"+str_num);
console.log(typeof(str_num));
let str_bool = Boolean(name)
console.log("String to Boolean "+str_bool);
console.log(typeof(str_bool));

let bool_num = Number(q)
console.log("Boolean to Number conversion "+bool_num);
console.log(typeof(bool_num));
let bool_str = String(p)
console.log("Boolean to String "+bool_str);
console.log(typeof(bool_str));

let null_num = Number(aa)
console.log("Null to number conversion "+null_num);
console.log(typeof(null_num));
let null_str = String(aa);
console.log("Null to String "+null_str);
console.log(typeof(null_str));


