canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;

background_image = "racing.jpg";

function add()
{
    background_imgtag = new Image(); //defining a variable with a new image
    background_imgtag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgtag.src = background_image; // load image

    car1_imgtag = new Image(); //defining a variable with a new image
    car1_imgtag.onload = uploadcar1; // setting a function, onloading this variable
    car1_imgtag.src = car1_image; // load image

    car2_imgtag = new Image(); //defining a variable with a new image
    car2_imgtag.onload = uploadcar2; // setting a function, onloading this variable
    car2_imgtag.src = car2_image; // load image

}

function uploadBackground()
{
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car2_width, car2_height);
}

//CAR1

function car1_right()
{
    if(car1_x <=700)
    {
        car1_x = car1_x + 10;
        console.log("When down arrow is pressed, x= " + car1_x + " | y = " +car1_y)
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}

function car2_up()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("When u is pressed, x= " + car2_x + " | y = " +car2_y)
        uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}

//CAR2

function car2_down()
{
    if(car2_y <=500)
    {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x= " + car2_x + " | y = " +car2_y)
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}

function car2_left()
{
    if(car2_x >=0)
    {
        car2_x = car2_x - 10;
        console.log("When l  is pressed, x= " + car2_x + " | y = " +car2_y)
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}

function car2_right()
{
    if(car2_x <=700)
    {
        car2_x = car2_x + 10;
        console.log("When r is pressed, x= " + car2_x + " | y = " +car2_y)
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed == '37')
    {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed == '85')
    {
        car2_up();
        console.log("key u");
    }

    if(keyPressed == '68')
    {
        car2_down();
        console.log("key d");
    }

    if(keyPressed == '76')
    {
        car2_left();
        console.log("key l");
    }

    if(keyPressed == '82')
    {
        car2_right();
        console.log("key r");
    }

}