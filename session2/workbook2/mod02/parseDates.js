let dateString = "December 1, 2002";
let dateMilliSec = Date.parse(dateString);
let dateObject = new Date(dateMilliSec);

console.log(dateMilliSec);
console.log(dateObject);
console.log(new Date(dateString));

