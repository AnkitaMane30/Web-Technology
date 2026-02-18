const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const time = Date();
    res.json({
    msg:"hello user",
    time1 : time
})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})