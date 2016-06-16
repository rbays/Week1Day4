var myArray = [];
var boxArray = []; //array generated from boxes
var outputDiv = document.getElementById("output");
var countryArray = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];

//define all buttons
var generateButton = document.getElementById("defaultArray");
var createButton = document.getElementById("createArray");
var pushButton = document.getElementById("push");
var popButton = document.getElementById("pop");
var shiftButton = document.getElementById("shift");
var unshiftButton = document.getElementById("unshift");
var indexButton = document.getElementById("indexButton");
var countryButton = document.getElementById("countryButton");

//define all input fields
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var inputIndex = document.getElementById("indexInput");
var indexVal = document.getElementById("indexVal");
var countryIn = document.getElementById("countryIn");

//function to put the 3 boxes into an array when they are not empty
function makeBoxArray(){
	boxArray = [];
	var boxObjectArray = [input1,input2,input3];//array containing the 3 input objects
	for (i=0; i < 3; i++) {
		if(boxObjectArray[i].value != "") {
			boxArray.push(boxObjectArray[i].value);
		}
	} 
}

//function to update output field, include in the end of all button functions
function outputArray(){
	outputDiv.innerHTML = "";
	for (i=0;i<myArray.length;i++){
		outputDiv.innerHTML += myArray[i] + "<br>";
	}
	outputDiv.innerHTML += "Length = " + myArray.length;
}

//generate 1-10 array
generateButton.addEventListener('click',generateArray,false);

function generateArray() {
	myArray = [];
	for (i=1;i<=10;i++){
		myArray.push(i);
	}
	outputArray();
}

//create array from 3 inputs
createButton.addEventListener('click',create,false);

function create() {
	makeBoxArray();
	myArray = boxArray;
	outputArray();
}

//push to array starting with left most box
pushButton.addEventListener('click',pushFunction,false);

function pushFunction() {
	makeBoxArray();
	for (i = 0; i < boxArray.length; i++) {
		myArray.push(boxArray[i]);
	}
	outputArray();
}

//pop from array
popButton.addEventListener('click',popFunction,false);

function popFunction() {
	myArray.pop();
	outputArray();
}

//shift from array
shiftButton.addEventListener('click',shiftFunction,false);

function shiftFunction() {
	myArray.shift();
	outputArray();	
}

//unshift into array, starting with leftmost box
unshiftButton.addEventListener('click',unshiftFunction,false);

function unshiftFunction() {
	makeBoxArray();
	for (i = 0; i < boxArray.length; i++) {
		myArray.unshift(boxArray[i]);
	}
	outputArray();
}


//add to array at a given index
indexButton.addEventListener('click',indexFunction,false);

function indexFunction() {
	var myItem = inputIndex.value;
	var myIndex = parseInt(indexVal.value);
	if (myIndex < myArray.length && myIndex >= 0) {
		myArray.splice( myIndex,0,myItem);
		outputArray();
	}
	else {
		outputDiv.innerHTML += "<br>invalid index";
	}
}

//search country string for a country
countryButton.addEventListener('click',countryFunction,false);

function countryFunction() {
	var myItem = countryIn.value;
	var countryIndex = countryArray.indexOf(myItem);
	if (countryIndex === -1) {
		outputDiv.innerHTML = myItem + " does not exist in country array";
	}
	else{
		outputDiv.innerHTML = myItem + " is at index " + countryIndex;
	}
}