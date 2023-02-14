// highlight point on hover
function mouseOver() {
	this.classList.add("highlight");

}

// unhighlight point on mouse out
function mouseOut() {
	this.classList.remove("highlight");
}

let coords = [];

// on click events
function onClick() {

	// if clicked, add border and add coord to display list
	if (!(this.className.baseVal.includes("border"))) {
		this.classList.add("border");

		let cx = this.getAttribute("cx");
		let cy = this.getAttribute("cy");
		coords.push("(" + cx + "," + cy + ")");
	}

	// if unclicked, remove border and coord from display list
	else {
		this.classList.remove("border");

		let cx = this.getAttribute("cx");
		let cy = this.getAttribute("cy");
		coords.pop("(" + cx + "," + cy + ")");
	}

	// display current coords
	document.getElementById("col2").innerHTML += coords;

}

function addPoint() {

	let xCoord = document.getElementById("xcoord").value;
	let yCoord = document.getElementById("ycoord").value;
	document.getElementById("user-point").cx = xCoord;
	document.getElementById("user-point").cy = yCoord;

}

let points = document.getElementsByClassName("circle");

// check which point has been hovered over
for (let i = 0; i < points.length; i ++) {
	points[i].addEventListener('mouseover', mouseOver);
	points[i].addEventListener('mouseout', mouseOut);
}

for (let i = 0; i < points.length; i ++) {
	points[i].addEventListener('click', onClick);
}

document.getElementById("subButton").addEventListener('click', addPoint);








