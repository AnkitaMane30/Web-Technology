const express = require('express');
const app = express();
const port = 3000;

//Array of Objects
const users = [
    {id : 1, name:"Ankita" ,age:21, grade : "A"},
    {id : 2, name:"Sidhi" ,age:21, grade : "A"},
    {id : 3, name:"Anuradha" ,age:21, grade : "A"},
    {id : 4, name:"sayli" ,age:19, grade : "A"}
]

//route
app.get("/", (req, res)=>{
    res.json(users);
});

app.get("/user/:id",(req,res)=>{
    const user1 = req.params.id;
    
    const user = users.find(u => u.id == user1)
    if(user){
        res.json(user);
    }
    else{
        res.send("User not found");
    }
})
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})