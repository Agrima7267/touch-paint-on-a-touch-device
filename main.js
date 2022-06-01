// create a paint app
// where it can be accessed on any device

var last_position_of_x, last_position_of_y;
color = "green";
width_of_line = 2;

// create the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContexxt("2d");

// adjust the screen width

var width = screen.width;

// create new width and height
new_width = screen.width - 70;
new_height = screen.height - 300;

// screen code
if (width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

// the touching part
canvas.addEventListener("touchstart", my_touchstart);
// function my_touchstart (e)
function my_touchstart(e){
    console.log("my_touchstart");
    // Here goes the start of the additional activity
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    // The End of the additional activty

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}

// touchmove
canvas.addEventListener("touchmove"), my_touchmove;
// function my_touchmove(e)

function my_touchmove(e){
    // touchmove function code
    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // same code as usual
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates =");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;

    // end of the same code as usual


}

// clear area part function
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
// end of the clear area function



