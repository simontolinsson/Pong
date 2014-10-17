// Deklarera varaiabler
var c, ctx, bollx = 100, bolly = 100, bollVX = -1, bollVY = 2;
var leftPLY = 100, rightPLY = 200, leftPLVY = 0, rightPLVY = 0;

function init(){
	// Tilldela Canvas
	c = document.getElementById("duk");
	ctx = c.getContext("2d");
     
	// Kör update var 20e ms
	window.setInterval(update, 20);
}

function update(){
	//Sudda canvas
	ctx.clearRect(0, 0, c.width, c.height);
    
	// Måla boll
	ctx.beginPath();
	ctx.arc(bollx, bolly, 5, 0, 2*Math.PI);
	ctx.fill();
	ctx.closePath();
    
	// Måla paddlar
	ctx.fillRect(10, leftPLY, 20, 50);
	ctx.fillRect(370, rightPLY, 20, 50);

	// Flytta bollen
	bollx = bollx + bollVX;
	bolly = bolly + bollVY;
    
    // Flytta spelare
    leftPLY = leftPLY + leftPLVY;
    rightPLY = rightPLY + rightPLVY
    
	// Studs mot golv
	if(bolly > 300){
    	bollVY = -bollVY;
    	bolly = 300;
	}
    
	// Studs mot taket
	if(bolly < 0){
    	bollVY = 1;
    	bolly = 0;
    }
    //Hitbox V paddel
    if(bollx> 10 && bollx < 30 && bolly > leftPLY && bolly < leftPLY + 50){
   	 bollVX = -bollVX;
	}
    if(bollx> 370 && bollx < 390 && bolly > leftPLY && bolly < leftPLY + 50){
   	 bollVX = -bollVX;
}
}
function keyDown(e){
    console.log(e.keyCode);
	// Knapptryck H uppåt
    if(e.keyCode == 38){
        rightPLVY = -2;
    
    }
    // Knapptryck H nedåt
    if(e.keyCode == 40){
        rightPLVY = 2;    
    }
    // Knapptryck V uppåt
    if(e.keyCode == 87){
        leftPLVY = -2;
    }
    // Knapptryck V nedåt
    if(e.keyCode == 83){
        leftPLVY = 2;
    }
}