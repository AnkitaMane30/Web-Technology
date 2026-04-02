const express = require('express'); // import statement
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const time = Date();
    res.json({
      message:"Hello",
      time1: time
    })
    res.send("welcome To home page")
})

app.get("/about",(req,res)=>{
  res.send("This is About page")
})

app.get("/contact",(req,res)=>{
  res.send("This is Contact page")
})

app.get("/info",(req,res)=>{
  res.send("This is information page")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})