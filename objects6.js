function Car(color,make,model){
	this.color = color;
	this.make = make;
	this.model = model;
	this.drive = function() {
		return ("Vroom Vroom!!!");
	};
	this.stop = function() {
		return ("Screeeeeeech!!!");
	};
}

var myCar = new Car("yellow","Fiat","Chinquecento");

document.getElementById("output").innerHTML = myCar.drive();