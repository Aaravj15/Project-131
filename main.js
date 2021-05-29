img = "";
function setup()
{
    canvas = createCanvas(620, 420);
    canvas.center();
}

function preload()
{
    img = loadImage("guestroom.png");
}

function draw()
{
    image(img, 0, 0, 620, 420);
    fill('#ffbf00');
    text("bed", 45, 150);
    noFill();
    stroke('#ffbf00');
    rect(30, 120, 450, 350);
}