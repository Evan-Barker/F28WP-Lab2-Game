function Bear(){
	this.dBear = 100;
	
	this.htmlElement = document.getElementById("bear");
	
	this.id = this.htmlElement.id;
	
	this.x = this.htmlElement.offsetLeft;
	
	this.y = this.htmlElement.offsetTop;
	
	
	this.move = fucntion(xDir, yDir){
		
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
		if (this.x < 0) this.x = 0;
		if (this.x > w - wi) this.x = w - iw;
		if (this.y < 0) this.y = 0;
		if (this.y > h - ih) this.y = h - ih;
		
	};
}


}function start(){
	
	//creat bear
	
	bear = new Beaer();
	
	
	//listen for keypress events
	document.addEventListener("keydown", moveBear, false);	//keydown here is keypress not down move
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

