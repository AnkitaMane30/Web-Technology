//Promises: promisese is an object, that represents a future result of an a asynchronous object
//Promises means i promis to give result
//real life ex. -->zomatto
//Promises has 3 states 
//1. pending---->waiting
//2.resolved--->success
//3.rejected---> cancel
//pending
//  |
//resolve/rejected

let myPromises = new Promise((resolve,rejected)=>{
    let success = false;
    if(success){
        resolve("Data fetch Successfully");
    }else{
        rejected("Error while Fetching data");
    }
});
//Calling to promises
//resolve --success
//reject-- error
//then--> Runs when success
//catch--> Runs when error
myPromises.then((result)=>{
    console.log(result);
}).catch((Error)=>{
    console.log(Error)
});

//Activity--->why promises better than call back

const promises1 = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        console.log("Async Task complete");
        resolve();
    },2000);
});

promises1.then(()=>{
    console.log("Promises consumed");
    
});

const promise2 = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve({userName :"Ankita",
            ID:306,
        })
    },3000)
});

promise2.then((user)=>{
    console.log(user);
})

//Activity
//Create 4 promises example
//take one variable and set it as true ,
//how to write promises in function --> using async keyword





