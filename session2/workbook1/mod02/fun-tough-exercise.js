// dana's solution
var hour = 23;
var minute = 49;
var minutesToAdd = 1300;
minute += minutesToAdd;
var overflow = Math.trunc(minute / 60);    // solve for over 60
minute %= 60;
hour += overflow;
// next day fix
hour %= 24;
console.log(hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0'));