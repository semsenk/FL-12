//Quadratic equation 
//ax2 + bx + c = 0

var a = parseInt(prompt("Enter please the value for a:"));
var b = parseInt(prompt("Enter please the value for b:"));
var c = parseInt(prompt("Enter please the value for c:"));

if (typeof (a, b, c) === "number") {
	var discriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

	if (discriminant > 0) {
	    let x1 = (-b + discriminant) / (2 * a);
	    let x2 = (-b - discriminant) / (2 * a);
	    console.log("x1 = " + x1 + "   x2 = " + x2);
	} 
	else if (discriminant === 0) {
	    let x = -b / (2 * a);
	    console.log("x = " + x);
	} 
	else {
	    console.log("no solution");
	}
} 
else {
    alert("Invalid input data");
    console.log("Ivalid input data");
} 
