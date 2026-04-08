//Experiment 1
//Activity- 1
console.log("Activity 1: Display Student information:");
document.writeln("Activity 1: Display Student information:")

let id = 306;
let studentName = "Ankita";
let email = "maneankita@gmail.com";
let contactNo = "8907543115";

console.log("ID: ",id);
document.writeln("<br>ID: ",id)
console.log("Name :",studentName);
document.writeln("<br>Name :",studentName);
console.log("Email :",email);
document.writeln("<br>Email :",email);
console.log("Contact Number :",contactNo);
document.writeln("<br>Contact Number :",contactNo);
console.log();


//Activity - 2
console.log("Activity 2: Check whether number is even or odd");
document.writeln("<br><br>Activity 2: Check whether number is even or odd")

let num = 10;
if(num % 2 == 0){
    console.log(num," is even");
    document.writeln("<br>", num, " is even"); 
}else{
    console.log(num, "is odd");
    document.writeln("<br>",num, " is odd");
}
console.log();

//Activity - 3
console.log("Activity 3: Check whether student pass or fail");
document.writeln("<br><br>Activity 3: Check whether student pass or fail");

let marks = 90;

if(marks > 50){
    console.log("Student is pass!!");
    document.writeln("<br>Student is pass!!");
}else{
    console.log("Student is fail!!");
    document.writeln("<br>Student is fail!!");
}
console.log();

//Activity - 4
console.log("Activity 4: Print numbers from 1 to 10");
document.writeln("<br><br>Activity 4: Print numbers from 1 to 10");

for(let i = 1; i < 11; i++){
    console.log(i);
    document.writeln("<br>", i);
}
console.log();

//Activity - 5
console.log("Activity 5: Assign value of one variable to another");
document.writeln("<br><br>Activity 5: Assign value of one variable to another");

let x = 10;
let y = x;

x = 1001;
console.log(x, y);
document.writeln("<br>",x," ",y);
console.log();

//Activity 6 --> print output ot chrome console




