//Singletan Object
const user = new Object;
console.log(user);
const user1 = {}; //non singletan object
user1.id = 1;
user1.name = "Ankita";
user1.isLogin =true;
console.log(user1);

//object inside the object
const user2 ={
    email:"Ankita@gamil.com",
    userName:{
        fullName:{
        fname:"Ankita",
        lname:"mane"
        }
    }
}
console.log(user2);
console.log(user2.userName.fullName.fname);
