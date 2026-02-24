//Blocking Example 
console.log("Blocking Example ");
function blockingEX1(){
    console.log("Starting a task");
    let sum = 0;
    for(let i = 0; i < 50; i++){
        sum += i;
    } 
    console.log("result is:"+ sum);
    console.log("Task is finished");
}
console.log("Before function call");
blockingEX1()
console.log("After function call");
console.log();


//Non- blocking Example 2
console.log("Non blocking Example ");
function nonBlockingEX1(){
    console.log("Starting a task");
    setTimeout(()=>{
        let sum = 0;
        for(let i = 0; i < 50; i++){
            sum += i;
        }
        console.log("Result: " +sum);
        console.log("Task is Finished");
    },0);
}
console.log("Before function call");
nonBlockingEX1();
console.log("After Function call");


//Activity 3--->real time use in company level
//async/await is used to write clean, maintainable, and readable asynchronous code 
// for handling API calls, database operations, and external services in production applications.

//Activity 4---->api fetch method
//fetch() is a built-in JavaScript method used to:
//Send HTTP requests
//Communicate with servers
//Get or send data (JSON, files, etc.)
//It is mainly used for:
//Calling backend APIs
//Getting database data
//Sending form data
//Authentication requests