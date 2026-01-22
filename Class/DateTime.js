let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(typeof(myDate));

//Timestamp - when we create pol in application then we use timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now()); // Compare in miliseconds
console.log(Date.now()/1000);//converts in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getUTCDate());
console.log(newDate.toLocaleString('default',{weekday:"long"}));






