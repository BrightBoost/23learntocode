// traffic light logic

var colorTrafficLight = "RED";
var closeToTrafficLight = true;
var carefulDriver = true;

// red
if(colorTrafficLight == "RED" && closeToTrafficLight || colorTrafficLight == "ORANGE" && (!closeToTrafficLight || closeToTrafficLight && carefulDriver) ) {
    console.log("stop");
}

// orange

// green

// broken