//Quadratic equation 
//ax2 + bx + c = 0

var a = parseInt(prompt("Enter please the value for a:", 0));
var b = parseInt(prompt("Enter please the value for b:", 0));
var c = parseInt(prompt("Enter please the value for c:", 0));

if (typeof(a, b, c) === "number") {
	var discriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);

	if (discriminant > 0) {
	    var x1 = (-b + discriminant) / (2 * a);
	    var x2 = (-b - discriminant) / (2 * a);
	    console.log("x1 = " + x1 + "   x2 = " + x2);
	} 
	else if (discriminant === 0) {
	    var x = -b / (2 * a);
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