//Basic Server SetUp
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

//Connecting to MYSQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manager",
    database: "studentdb"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});


//CURD Operations
//Post 
app.post("/student", (req, res)=>{
    const {name, age, course} = req.body;

    const sql = "INSERT INTO students (name, age, course) VALUES (?,?,?)";

    db.query(sql, [name, age, course], (error, result)=>{
        if(error){
            res.send(error);
        }else{
            res.send("Student Added Successfully!!");
        }
    });
});

//get
app.get("/student",(req,res)=>{
    const sql = "SELECT * FROM students";

    db.query(sql, (error,result)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(result);
        }
    });
});

//put
app.put("/student/:id", (req, res)=>{
    const {name, age, course} = req.body;
    const {id } = req.params;
    
    const sql = "UPDATE students SET name = ?, age = ?, course = ? WHERE id = ?";

    db.query(sql, [name, age, course, id], (error, result)=>{
        if(error){
            res.send(error);
        }else{
            res.send("Student updated successfully!!");
        }
    });
});

//delete
app.delete("/student/:id",(req,res)=>{
    const { id } = req.params;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (error, result)=>{
        if(error){
            res.send(error);
        }else{
            res.send("Student Deleted Successfully!!");
        }
    });
});

//Listen Method
app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`);
});