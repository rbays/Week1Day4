var myPerson = {
	firstname: "Robert",
	surname: "Bays",
	fullname: function(){
		document.getElementById("output").innerHTML = this.firstname + " " + this.surname;
	}
};

//group with person in it
var myGroup = {
	size:1,
	person:myPerson	
};

//call full name function
myGroup.person.fullname();