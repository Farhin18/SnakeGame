//Game constants & variables
let direction = { x: 0, y: 0 };
const foodSound = new Audio("foodsound.wav");
const gameOverSound = new Audio("gameover.wav");
const moveSound = new Audio("movesound.wav");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
//game function
function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function gameEngine() {
  // part 1; updating the snake array & food

  // part 2; display the snake and food
  board.innerHTML;
}
//   console.log(ctime);

//main logic starts here
window.requestAnimationFrame(main);
