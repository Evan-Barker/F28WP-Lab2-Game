function Bear(){
	this.dBear = 100;
	
	this.htmlElement = document.getElementById("bear");
	
	this.id = this.htmlElement.id;
	
	this.x = this.htmlElement.offsetLeft;
	
	this.y = this.htmlElement.offsetTop;
	
	
	this.move = fucntion(xDir, yDir) {
		
		//keeps bear in play area
		this.firBounds();
		
		this.x += this.dBear * xDir;
		
		this.y += this.dBear * yDir;
		
		this.display();
		
	};
	
	
	this.display = funtion(){
		
		this.htmlElement.style.left = this.x + "px";
		
		this.htmlElement.style.top = this.y + "px";
		
		this.htmlElement.style.display = "absolute";
		
	};
	
	
	this.fitBounds = function(){
		
		let parent = this.htmlElement.parentElement;
		
		let iw = this.htmlElement.offsetWidth;
		let ih = this.htmlElement.offsetHeight;
		
		let l = parent.offsetLeft;
		let t = parent.offsetTop;
		let w = parent.offsetWidth;
		let h = parent.offsetHeight;
		
		//if <this> moves out of bounds it will get moved back into bounds
		if (this.x < 0){
			this.x = 0;
		}
		
		if (this.x > w - wi){
			this.x = w - iw;
		}
		
		if (this.y < 0){
			this.y = 0;
		}
		
		if (this.y > h - ih){
			this.y = h - ih;
		}
		
	};
	
	
	//setSpeed function?
}


}function start(){
	
	//create bear
	
	bear = new Beaer();
	
	
	//listen for keypress events
	document.addEventListener("keydown", moveBear, false);	//keydown here is keypress not down move
	
	//create array for bees
	bees = new Array();
	
	//create bees
	makeBees();
}


//handle keyboard events

//move bear
function moveBear(e){
	
	//codes for four keys
	const KEYUP = 38;
	const KEYDOWN = 40;
	const KEYLEFT = 37;
	const KEYDOWN = 39;//? value input by key?wut
	
	if(e.keyCode == KEYRIGHT){
		bear.move(1,0)
	}//key right
	
	if(e.keyCode == KEYLEFT){
		bear.move(-1,0)
	}//key left
	
	if(e.keyCode == KEYUP){
		bear.move(0,-1)//from top?
	}//key up
	
	if(e.keyCode == KEYDOWN){
		bear.move(0,1)
	}//key down
}



class Bee{
	constructor(beeNumber){
		//HTML element corresponding to the img of the bee
		this.htmlElement = create(beeNumber);
		
		//its id
		this.id = this.htmlElement.id;
		
		//the left position (x)
		this.x = this.thmlElement.offsetLeft;
		
		//the top position (y)
		this.y = this.htmlElement.offsetTop;
		
		
		this.move = function(dx, dy){
			
			//move bees by dx & dy
			this.x += dx;
			this.y += dy;
			
			this.display();
		};
		
		
		this.display() = function(){
			
			//adjust position of the bee and display changes
			
			//call function to keep 
			this.fitBounds();
			
			this.htmlElement.style.left = this.x + "px";
			this.htmlElement.style.top = this.y + "px";
			
			this.htmlElement.style.display = "block";
			
		};
		
		
		this.fitBounds = function(){
			
			//checks and keeps bees on board
			
			let parent = this.htmlElement.parentElement;
			
			let iw = this.htmlElement.offsetWidth;
			let ih = this.htmlElement.offsetHeight;
			
			let l = parent.offsetLeft;
			let t = parent.offsetTop;
			let w = parent.offsetWidth;
			let h = parent.offsetHeight;
			
			if (this.x < 0)
				this.x = 0;
			if (this.x > w - iw)
				this.x = w - iw;
			if (this.y < 0)
				this.y = 0;
			if (this.y > h - ih)
				this.y = h - ih;
			
		};
	}
}


function createBeeImg(wNum){
	
	//get dimension & position of the board div
	
	let boardDiv = document.getElementById("board");
	
	let boardDivW = boardDiv.offsetWidth;
	let boardDivH = boardDiv.offsetHeight;
	let boardDivX = boardDiv.offsetLeft;
	let boardDivY = boardDiv.offsetTop;
	
	//create Img element
	let img = document.createElement("img");
	img.setAttribute("src","images/bee.gif");
	img.setAttribute("width","100");
	img.setAttribute("alt","A bee!");
	img.setAttribute("class","bee");
	
	//add to DOM as child of board div
	img.style.position = "absolute";
	boardDiv.appendChild(img);
	
	//set initial position of bee
	let x = getRandomInt(boardDivW);
	let y = getRandomInt(boardDivH);
	
	img.style.left = (boardDivX + x) + "px";
	img.style.top = (y) + "px";
	
	//return img object
	return img;
}


//function to give a random number for bee placement
function getRandomInt(max){
	return Math.floor(Math.random()*max;
}

function makeBees(){
	
	//get number of bees specified by user
	
	let nbBees = document.getElementById("nbBees").value;
	
	//ensure is a number
	nbBees = Number(nBees)
	if(isNaN(nbBees)){
		window.alert("Invalid number of bees");
		
		return;
	}
	
	//create bees
	
	let i = 1;
	while (i <= nbBees){
		var num = 1;
		
		var bee = new Bee(num);//create object and img element
		bee.display()
		bees.push(bee);//add to bees array. (what array, idk tired rn) - ah next step
		
		i++;
	}
	
}


//move bees
function moveBees(){
	
	//get speed input field value
	let speed = document.getElementById("speedBees").value;
	
	//move each bee to a random location
	for (let i = 0; i < bees.length;; i++){
		
		let dx = getRandomInt(2*speed) - speed;
		let dy = getRandomInt(2*speed) - speed;
		
		bees[i].move(dx, dy);
		
		//count stings
		isHit(bees[i], bear);
	}
}


//update loop for game
function updateBees(){
	
	//move bees randomly
	moveBees();
	
	//fixed update period
	let period = document.getElementById("updateTimer").value;// uses field updateSpeed for value of period
	
	
	//check score too see if game over
	if(
	
	
	//updateTimer - wait for next move
	updateTimer = setTimeout('updateBees()', period);
	
}


//hit counter
function isHit(defender, offender){
	
	if (overlap(defender,offender)){//check if 2 img overlap
		let score = hits.innerHTML;
		score = Number(score) +1//increment score - why not score++?
		hits.innerHTML = score;//display new score
	}	
}

function overlap(element1, element2){
	
	//consider the two rectangles wrapping the 2 elements - hitbox
	
	//rectangle of 1st element
	left1 = element1.htmlElement.offsetLeft;
	top1 = element1.htmlElement.offsetTop;
	right1 = element1.htmlElement.offsetLeft + element1.htmlElement.offsetWidth;
	bottom1 = element1.htmlElement.offsetTop + element1.htmlElement.offsetHeight;
	
	/rectangle of 2nd element
	left2 = element2.htmlElement.offsetLeft;
	top2 = element2.htmlElement.offsetTop;
	right2 = element2.htmlElement.offsetLeft + element2.htmlElement.offsetWidth;
	bottom2 = element2.htmlElement.offsetTop + element2.htmlElement.offsetHeight;
	
	//calc intersection of rectangles
	x_intersect = Math.max(, Math.nim(right1, right2) - Math.max(left1, left2));
	y_intersect = Math.max(o, Math.min(bottom1, bottom2) - Math.max(top1, top2));
	
	//if intersection nil no hit
	if (intersectArea == 0 || isNaN(intersectArea)){
		return false;
	}
	
	return true;	
	
}