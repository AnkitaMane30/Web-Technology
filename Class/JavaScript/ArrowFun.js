//Arrow Function
//this keyword used for inform current context
const addTwoNumbers =function () {
    let userName = "ankita";
    console.log(userName);
    console.log(`using this ${this.userName}`);
}
addTwoNumbers();
function add(){
    let user = "Ankita";
    console.log(user);
    console.log(this);  
}
add()
const sample = () =>{
    let user = "Ankita";
    console.log(this);
}
sample();

const addTwoNums = (num1, num2)=>{
    return num1 + num2;
}

console.log(addTwoNums(10,20));
