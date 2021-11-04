function start() {//works
	//create bear
	bear = new Bear();

	//listen for keypress events
	document.addEventListener("keydown", moveBear, false); //keydown here is keypress not down move

	//create array for bees
	bees = new Array();

	//create bees
	makeBees();
	
	updateBees();
	
	//take start time
	lastStingTime = new Date();

	}

	function Bear() {//works
	this.dBear = document.getElementById("speedBear").value;

	this.htmlElement = document.getElementById("bear");

	this.id = this.htmlElement.id;

	this.x = this.htmlElement.offsetLeft;

	this.y = this.htmlElement.offsetTop;

	this.move = function (xDir, yDir) {//works
		//keeps bear in play area
		this.fitBounds();
		
		this.bBear = document.getElementById("speedBear").value;

		this.x += this.dBear * xDir;

		this.y += this.dBear * yDir;

		this.display();
	};

	this.display = function () {//works
		this.htmlElement.style.left = this.x + "px";

		this.htmlElement.style.top = this.y + "px";

		this.htmlElement.style.display = "absolute";
	};

	this.fitBounds = function () {//works
		let parent = this.htmlElement.parentElement;

		let iw = this.htmlElement.offsetWidth;
		let ih = this.htmlElement.offsetHeight;

		let l = parent.offsetLeft;
		let t = parent.offsetTop;
		let w = parent.offsetWidth;
		let h = parent.offsetHeight;

		//if <this> moves out of bounds it will get moved back into bounds
		if (this.x < 0) {
			this.x = 0;
		}

		if (this.x > w - iw) {
			this.x = w - iw;
		}

		if (this.y < 0) {
			this.y = 0;
		}

		if (this.y > h - ih) {
			this.y = h - ih;
		}
	};

	//setSpeed function?
	this.change = function(){//does not appear to work
		this.dBear = document.getElementById("speedBear").value;
	}
}

//handle keyboard events

//move bear
function moveBear(e) {//works
	//codes for four keys
	const KEYUP = 38;
	const KEYDOWN = 40;
	const KEYLEFT = 37;
	const KEYRIGHT = 39; //? value input by key?wut
	
	if (e.keyCode == KEYRIGHT) {
		bear.move(1, 0);
	} //key right
	
	if (e.keyCode == KEYLEFT) {
		bear.move(-1, 0);
	} //key left
	
	if (e.keyCode == KEYUP) {
		bear.move(0, -1); //from top?
	} //key up
	
	if (e.keyCode == KEYDOWN) {
		bear.move(0, 1);
	} //key down
}

class Bee {
	constructor(beeNumber) {//semi works
		//HTML element corresponding to the img of the bee
		this.htmlElement = createBeeImg(beeNumber);

		//its id
		this.id = this.htmlElement.id;

		//the left position (x)
		this.x = this.htmlElement.offsetLeft;

		//the top position (y)
		this.y = this.htmlElement.offsetTop;

		this.move = function (dx, dy) {
			//move bees by dx & dy
			this.x += dx;
			this.y += dy;

			this.display();
		};

		this.display = function () {//?
			//adjust position of the bee and display changes
			
			//call function to keep in bounds
			this.fitBounds();
			
			this.htmlElement.style.left = this.x + "px";
			this.htmlElement.style.top = this.y + "px";
			
			this.htmlElement.style.display = "block";
		};

		this.fitBounds = function () {//?
			//checks and keeps bees on board
			
			let parent = this.htmlElement.parentElement;
			
			let iw = this.htmlElement.offsetWidth;
			let ih = this.htmlElement.offsetHeight;
			
			let l = parent.offsetLeft;
			let t = parent.offsetTop;
			let w = parent.offsetWidth;
			let h = parent.offsetHeight;
			
			if (this.x < 0){
				this.x = 0;
			}
			if (this.x > w - iw){
				this.x = w - iw;
			}
			if (this.y < 0){
				this.y = 0;
			}
			if (this.y > h - ih){
				this.y = h - ih;
			}
		};
	}
}

function createBeeImg(wNum) {//works
	//get dimension & position of the board div

	let boardDiv = document.getElementById("board");

	let boardDivW = boardDiv.offsetWidth;
	let boardDivH = boardDiv.offsetHeight;
	let boardDivX = boardDiv.offsetLeft;
	let boardDivY = boardDiv.offsetTop;

	//create Img element
	let img = document.createElement("img");
	img.setAttribute("src", "images/bee.gif");
	img.setAttribute("width", "100");
	img.setAttribute("alt", "A bee!");
	img.setAttribute("class", "bee");

	//add to DOM as child of board div
	img.style.position = "absolute";
	boardDiv.appendChild(img);

	//set initial position of bee
	let x = getRandomInt(boardDivW);
	let y = getRandomInt(boardDivH);

	img.style.left = boardDivX + x + "px";
	img.style.top = y + "px";

	//return img object
	return img;
}

//function to give a random number for bee placement
function getRandomInt(max) {//works cus bee spawns differently each time
	return Math.floor(Math.random() * max);
}

function makeBees() {//doesn not happen
	//get number of bees specified by user

	let nbBees = document.getElementById("nbBees").value;

	//ensure is a number
	nbBees = Number(nbBees);
	if (isNaN(nbBees)) {
		window.alert("Invalid number of bees");

		return;
	}

	//create bees

	let i = bees.length+1;//this allows the beeButton to work
	while (i <= nbBees) {
		var num = i;

		var bee = new Bee(num); //create object and img element
		bee.display();
		bees.push(bee); //add to bees array. (what array, idk tired rn) - ah next step

		i++;
	}
}

//move bees
function moveBees() {
	//get speed input field value
	let speed = document.getElementById("speedBees").value;
	
	//move each bee to a random location
	for (let i = 0; i < bees.length; i++) {
		let dx = getRandomInt(2 * speed) - speed;
		let dy = getRandomInt(2 * speed) - speed;
	
		bees[i].move(dx, dy);
		
		//count stings
		isHit(bees[i], bear);
	}
}

//update loop for game
function updateBees() {//works
	//move bees randomly
	moveBees();
	
	//fixed update period
	let period = document.getElementById("periodTimer").value; // uses field periodTimer for value of period
	
	//check score too see if game over
	if(hits.innerHTML > 999){
		alert("Game Over")
	}else{
		//updateTimer - wait for next move
		updateTimer = setTimeout("updateBees()", period);
	}
}

//hit counter
function isHit(defender, offender) {//works
	if (overlap(defender, offender)) {
		//check if 2 img overlap
		let score = hits.innerHTML;
		score = Number(score) + 1; //increment score - why not score++?
		hits.innerHTML = score; //display new score
		
		//calc and display longest duration between hits	//does first time then doesnt refresh for somereason
		
		let newStingTime = new Date();
		let thisDuration = newStingTime - lastStingTime;
		lastStingTime = newStingTime;
		let longestDuration = Number(duration.innerHTML);
		
		if (longestDuration === 0){
			longestDuration = thisDuration;
		}else{
			if (longestDuration < thisDuration){
				lonogestDuration = thisDuration;
			}
		}
		document.getElementById("duration").innerHTML = longestDuration;
	}
}

function overlap(element1, element2) {//works
	//consider the two rectangles wrapping the 2 elements - hitbox

	//rectangle of 1st element
	left1 = element1.htmlElement.offsetLeft;
	top1 = element1.htmlElement.offsetTop;
	right1 = element1.htmlElement.offsetLeft + element1.htmlElement.offsetWidth;
	bottom1 = element1.htmlElement.offsetTop + element1.htmlElement.offsetHeight;

	//rectangle of 2nd element
	left2 = element2.htmlElement.offsetLeft;
	top2 = element2.htmlElement.offsetTop;
	right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth;
	bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight;

	//calc intersection of rectangles
	x_intersect = Math.max(0, Math.min(right1, right2) - Math.max(left1, left2));
	y_intersect = Math.max(0, Math.min(bottom1, bottom2) - Math.max(top1, top2));

	intersectArea = x_intersect * y_intersect;

	//if intersection nil no hit
	if (intersectArea == 0 || isNaN(intersectArea)) {
		return false;
	}

		return true;
}


//add more bees via button
function beeButton(){//not implemented
	document.getElementById("nbBees").value = Number(document.getElementById("nbBees").value) + 1;
	makeBees();
}

//restart button
function restart(){//works
	location.reload();
}