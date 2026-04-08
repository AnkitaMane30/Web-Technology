const express = require('express');
const app = express();
const port = 3000;

//Middleware
app.use((req,res,next)=>{
    console.log(`Date received: ${new Date()}`);
    next();
})


//routes
app.get("/",(req,res)=>{
    res.send("Welcome to Home page");
})
app.get("/user", (req,res)=>{
    res.send(`User details pages`);
})
app.get("/about",(req, res)=>{
    res.send("This is About page");
})
app.get("/register", (req, res)=>{
    res.send("User may register Here");
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})