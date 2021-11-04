function Bear(){
	this.dBear = 100;
	
	this.htmlElement = document.getElementById("bear");
	
	this.id = this.htmlElement.id;
	
	this.x = this.htmlElement.offsetLeft;
	
	this.y = this.htmlElement.offsetTop;
	
	
	this.move = fucntion(xDir, yDir){
		
		this.x += this.dBear * xDir;
		
		this.y += this.dBear * yDir;
		
		this.display();
		
	};
	
	
	this.display = funtion(){
		
		this.htmlElement.style.left = this.x + "px";
		
		this.htmlElement.style.top = this.y + "px";
		
		this.htmlElement.style.display = "absolute";
		
	};

}