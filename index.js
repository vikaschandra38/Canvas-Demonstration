// Import stylesheets
import './style.css';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let circle1 = { x: 20, y: 50, radius: 15, color: '#f8d363' };
let circle2 = { x: 20, y: 90, radius: 15, color: '#2971d7' };
let circle3 = { x: 20, y: 130, radius: 15, color: '#ba0000' };
let circle4 = { x: 20, y: 170, radius: 15, color: '#5e9446' };
let arrow1 = { x: 400, y: 50 };
let arrow2 = { x: 400, y: 90 };
let arrow3 = { x: 400, y: 130 };
let arrow4 = { x: 400, y: 170 };

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawArrow(ctx, fromx, fromy, tox, toy) {
  //variables to be used when creating the arrow
  var headlen = 10;
  var angle = Math.atan2(toy - fromy, tox - fromx);

  ctx.save();
  ctx.strokeStyle = 'black';

  //starting path of the arrow from the start square to the end square
  //and drawing the stroke
  ctx.beginPath();
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = 5;
  ctx.stroke();

  //starting a new path from the head of the arrow to one of the sides of
  //the point
  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //path from the side point of the arrow, to the other side point
  ctx.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 7),
    toy - headlen * Math.sin(angle + Math.PI / 7)
  );

  //path from the side point back to the tip of the arrow, and then
  //again to the opposite side point
  ctx.lineTo(tox, toy);
  ctx.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 7),
    toy - headlen * Math.sin(angle - Math.PI / 7)
  );

  //draws the paths created above
  ctx.stroke();
  ctx.restore();
}

function drawCanvas() {
  drawCircle(circle1.x, circle1.y, circle1.radius, circle1.color);
  drawCircle(circle2.x, circle2.y, circle2.radius, circle2.color);
  drawCircle(circle3.x, circle3.y, circle3.radius, circle3.color);
  drawCircle(circle4.x, circle4.y, circle4.radius, circle4.color);
  drawArrow(ctx, arrow1.x, arrow1.y, arrow1.x - 40, arrow1.y);
  drawArrow(ctx, arrow2.x, arrow2.y, arrow2.x - 40, arrow2.y);
  drawArrow(ctx, arrow3.x, arrow3.y, arrow3.x - 40, arrow3.y);
  drawArrow(ctx, arrow4.x, arrow4.y, arrow4.x - 40, arrow4.y);
}

drawCanvas();

function moveArrow1() {
  arrow1.x -= 40;
  drawCanvas();
}

function moveArrow2() {
  arrow2.x -= 40;
  drawCanvas();
}

function moveArrow3() {
  arrow3.x -= 40;
  drawCanvas();
}

function moveArrow4() {
  arrow4.x -= 40;
  drawCanvas();
}

// Attach click event listeners to circles
canvas.addEventListener('click', function (event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (
    Math.sqrt((x - circle1.x) ** 2 + (y - circle1.y) ** 2) <= circle1.radius
  ) {
    if (arrow1.x <= 120) {
      arrow1.x = 120 - 40;
      circle1.color = '#8c8c8c';
      clearCanvas();
      drawCanvas();
      return;
    } else {
      clearCanvas();
      moveArrow1();
    }
  } else if (
    Math.sqrt((x - circle2.x) ** 2 + (y - circle2.y) ** 2) <= circle2.radius
  ) {
    if (arrow2.x <= 120) {
      arrow2.x = 120 - 40;
      circle2.color = '#8c8c8c';
      clearCanvas();
      drawCanvas();
      return;
    } else {
      clearCanvas();
      moveArrow2();
    }
  } else if (
    Math.sqrt((x - circle3.x) ** 2 + (y - circle3.y) ** 2) <= circle3.radius
  ) {
    if (arrow3.x <= 120) {
      arrow3.x = 120 - 40;
      circle3.color = '#8c8c8c';
      clearCanvas();
      drawCanvas();
      return;
    } else {
      clearCanvas();
      moveArrow3();
    }
  } else if (
    Math.sqrt((x - circle4.x) ** 2 + (y - circle4.y) ** 2) <= circle4.radius
  ) {
    if (arrow4.x <= 120) {
      arrow4.x = 120 - 40;
      circle4.color = '#8c8c8c';
      clearCanvas();
      drawCanvas();
      return;
    } else {
      clearCanvas();
      moveArrow4();
    }
  }
});

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resetCanvas() {
  circle1 = { x: 20, y: 50, radius: 15, color: '#f8d363' };
  circle2 = { x: 20, y: 90, radius: 15, color: '#2971d7' };
  circle3 = { x: 20, y: 130, radius: 15, color: '#ba0000' };
  circle4 = { x: 20, y: 170, radius: 15, color: '#5e9446' };
  arrow1 = { x: 400, y: 50 };
  arrow2 = { x: 400, y: 90 };
  arrow3 = { x: 400, y: 130 };
  arrow4 = { x: 400, y: 170 };
  clearCanvas();
  drawCanvas();
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetCanvas);
