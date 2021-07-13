// Setting up the canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// Get the width and height of the canvas element
let width = canvas.width;
let height = canvas.height;
// Calculate the width and height in cells
let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;
let score = 0;
// Draw the frame
let drawBorder = function () {
 ctx.fillStyle = "Gray";
 ctx.fillRect(0, 0, width, blockSize);
 ctx.fillRect(0, height - blockSize, width, blockSize);
 ctx.fillRect(0, 0, blockSize, height);
 ctx.fillRect(width - blockSize, 0, blockSize, height);
};
// Displaying the game score in the upper left corner
const drawScore = function () {
ctx.font = "20px Courier";
ctx.fillStyle = "Black";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Счет: " + score, blockSize, blockSize);
};
   // We cancel the action setInterval and print the message "End of the game
   const gameOver = function () {
    clearInterval(intervalId);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Конец игры", width / 2, height / 2);
   };
   // Draw a circle
   const circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
    ctx.fill();
    } else {
    ctx.stroke();
    }
   };
   // Setting the constructor Block (cell)
    let Block = function (col, row) {
    this.col = col;
    this.row = row;
   };
   // Draw a square at the cell position
   Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
   };