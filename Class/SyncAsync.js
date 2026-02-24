//Synchronous javascript----> 
// code execute line by line
//Each task wait for previous task to finish , blocking in nature.
//javascript is aby default synchronous and single threaded

console.log("Start");
add = (a , b)=>{
    return a + b
}
let result = add(10, 20);
console.log(result);
console.log("End");

//some task take time like api call, file read, database and timer, js does not wait, it moves to next line, non blocking behaviour
// uses---> fetching data from server, reading file , set time out, api calls
console.log("Start");
setTimeout(()=>{
    console.log("Inside Timeout");
},2000);
console.log("End");

//settimeout is asynchronous ,it does not wait for 2 second to run Insidetime line to execute, it first run end line and then run 

//Activity--->
//geuss the output game
//blocking and unblocking 2 example
//real time use in company level
//api fetch method