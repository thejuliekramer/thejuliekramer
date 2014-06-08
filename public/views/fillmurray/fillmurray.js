$(document).ready(function() {

function randomNumber() {
var random = Math.max(100, Math.random() * 1000);
return Math.round(random);
}

var height = randomNumber();
var width = randomNumber();
var fillmurray = "http://fillmurray.com/"; 

function sizeFunction() {
	height = width = randomNumber();
	$("img").attr("src", fillmurray + height + "/" + width);
}

$("img").hover(function() {
	sizeFunction();
});

$("img").click(function() {
	sizeFunction();
});
});


// // function that returns random number
// // multiplying by 1000 because javascrop returns decimals

// function randomNumber() {

// var random = (Math.random() * 1000);

// return Math.round(random);
// }

// // generate a value for height and width

// var height = randomNumber();
// var width = randomNumber();


// // append image to element body
// var fillmurray = "http://fillmurray.com/" + height + "/" + width;

// // find the img element, and when a user hovers over it, execute the folling: find the img
// // element and change the src attributes to my kittyURL variable