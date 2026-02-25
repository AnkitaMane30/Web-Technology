//Fetch is a built in javascript method used to make http request
//It return promises

//Examples
//fetch('url')---syntax

fetch("https://jsonplaceholder.typicode.com/users/2")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});

//Activity-->
//Async await exaple with fetch method
//3.fetch user display names in html list
//4.fetch post, show only first 5 
//5.create a fake promise manually resolve after 3 , reject 5

//what is promise in js
//how many promise states 
//defferent bet promises and call back
//what is fetch method js
//why do we use response.json()
//diff bet then and catch
//diff bet async and await

