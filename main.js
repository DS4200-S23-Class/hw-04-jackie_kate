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

		let coordinate = this.getAttribute("name");
		coords.push(coordinate);
	}

	// if unclicked, remove border and coord from display list
	else {
		this.classList.remove("border");

		let coordinate = this.getAttribute("name");
		coords.pop(coordinate);
	}

	// display current coords
	document.getElementById("coords").innerHTML = coords;
}

function addPoint() {

	let xCoord = document.getElementById("xcoord").value;
	let yCoord = document.getElementById("ycoord").value;
	let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');


	circle.setAttributeNS(null, 'cx', xCoord * 30);
	circle.setAttributeNS(null, 'cy', 300 - yCoord * 30);
	circle.setAttributeNS(null, 'r', 10);
	circle.setAttributeNS(null, 'name', "(" + xCoord + "," + yCoord + ")");
	circle.classList.add('circle');

	document.getElementById('frame').appendChild(circle);

circle.addEventListener('mouseover', mouseOver);
circle.addEventListener('mouseout', mouseOut);
circle.addEventListener('click', onClick);
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
document.getElementById("newPoint").addEventListener('mouseover', mouseOver);
document.getElementById("newPoint").addEventListener('mouseout', mouseOut);
document.getElementById("newPoint").addEventListener('click', onClick);









