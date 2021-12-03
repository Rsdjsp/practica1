const canvas = document.querySelector(".canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

// ctx.lineWidth = 6;
// ctx.strokeStyle = "blue";
// ctx.fillStyle = "blue";
// ctx.strokeRect(50, 50, 400, 200);
// ctx.fillRect(10, 20, 400, 200);
// ctx.lineTo(100, 300);
// ctx.lineTo(120, 350);
// ctx.lineTo(320, 250);
// ctx.lineTo(120, 650);
// ctx.stroke();
// ctx.closePath();
// ctx.beginPath();
// ctx.lineTo(80, 250);
// ctx.lineTo(120, 650);
// ctx.stroke();

let paiting, color, lineWidth, difX, difY;

canvas.addEventListener("mousedown", (e) => {
  difX = e.clientX - dif.left;
  difY = e.clientY - dif.top;
  paiting = true;
  color = document.getElementById("color").value;
  lineWidth = document.getElementById("lw").value;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (paiting) {
    dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
    difX = e.clientX - difX.left;
    difY = e.clientY - difY.top;
  }
});

canvas.addEventListener("mouseup", (e) => {
  ctx.closePath();
  paiting = false;
});

const dibujar = (x1, y1, x2, y2) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};
