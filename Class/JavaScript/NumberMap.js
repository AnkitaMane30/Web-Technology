const balance = new Number(10);
console.log(balance);
console.log(typeof(balance));

console.log(balance.toString());
console.log(balance.toFixed(2)); //when we build e-commerce website, pricision value too long, to fix that we use toFixed()
console.log(balance.toString().length);
//console.log(balance.to(2));

const h = 1000000;
console.log(h.toLocaleString()); // by default us standart
console.log(h.toLocaleString('en-IN')); // Indian format

//Math
console.log(Math.abs(-4));//negative to positive, positive to positive
console.log(Math);
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); //choose greater value
console.log(Math.floor(4.6)); //choose smallest value

console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));

//Activity - Math.random() why we use it






