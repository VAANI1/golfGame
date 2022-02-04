var canvas = new fabric.canvas('myCanvas');

ball_y = 0;
ball_x = 0;
holl_y = 400;
holl_x = 800;


block_image_width = 5;
block_image_height = 5;

function load_img() {
	fabric.Image.fromURL("golf-h.png", funtion(Img) {
		holl_obj = Img;
		holl_obj.scaleToWidth(50);
		holl_obj.scaleToHeight(50);
		holl_obj.set({
			top: holl_y;
			left: holl_x;

		})
canvas.add(hole_obj);

	})
	new_image();
}

function new_image() {
	fabric.Image.fromURL("ball.png", funtion(Img) {
		ball_obj = Img;
		 ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: ball_y;
			left: ball_x;

		})
canvas.add(ball_obj);

	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		
	}

	function down() {
		
	}

	function left() {
		if (ball_x > 5) {
			
		}
	}

	function right() {
		if (ball_x <= 1050) {
			
		}
	}

}

