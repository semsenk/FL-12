// Identify triangle type

var a = parseInt(prompt("Enter please the value for a:", ""));
var b = parseInt(prompt("Enter please the value for b:", ""));
var c = parseInt(prompt("Enter please the value for c:", ""));

if ((typeof(a) || typeof(b) || typeof(c)) === "" || undefined) {
	window.alert("input values should be ONLY numbers");
}
else if (a <= 0 || b <= 0 || c <= 0) {
    window.alert("A triangle must have 3 sides with a positive definite length");
} 
else if (a + b <= c || a + c <= b || b + c <= a) {
    window.alert("Triangle doesn\'t exist");
} 
else if (a === b && b === c) {
    console.log("Equilateral triangle");
} 
else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
} 
else {
    console.log("Scalene triangle");
}
 