const express = Require('express')
const app = express()
const port = 3000;

//Handling request and response
//Express app handle HTTP request and response 
//request --> The req object contain information about the client request
//Example - URL, Headers, Query parameters, request body

//Question --> what are the query parameters ? and why we use that ?

app.get("/", (req, res) => {
    console.log(req.query.name)
})

//Activity 1 - detail study about query parameter  
//Activity 2 - 3-4 examples of query parameters 
//Activity 3 - real time use of query parameter