var myPerson = {
	firstname: "Robert",
	surname: "Bays",
	fullname: function(){
		document.getElementById("output").innerHTML = this.firstname + " " + this.surname;
	}
}

//call full name function
myPerson.fullname();