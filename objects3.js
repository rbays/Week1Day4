var outputDiv = document.getElementById("output"),
	myObject = {
	height : 12,
	width : 10,
	depth : 15,
	findVolume: function(){
		return (this.height * this.width * this.depth)
	}
	};
outputDiv.innerHTML = "my cuboid has height " + myObject.height + ", width " + myObject.width + " and depth " + myObject.depth + "<br>The cuboid has volume " + myObject.findVolume();
