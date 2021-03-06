const lienzo = document.querySelector('#lienzo');
// git push -u origin master
lienzo.width = window.innerWidth;
lienzo.Height = window.innerHeight;
let context = lienzo.getContext('2d');
const x = document.querySelector('#x');
const y = document.querySelector('#y');
// context.lineWidth = 28;
context.lineJoin = 'round';
context.lineCap = 'round';
let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;

let direction = true;
function draw(e) {
	if (!isDrawing) return;
	context.strokeStyle = `hsl(${hue}, 100% ,50%)`;
	// console.log(e);
	context.beginPath();
	// context.lineWidth = hue;
	context.moveTo(lastX, lastY);
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
	hue = hue >= 360 ? 0 : (hue += 2);

	if (context.lineWidth >= 70 || context.lineWidth <= 1) {
		direction = !direction;
	}

	if (direction) {
		context.lineWidth++;
	} else {
		context.lineWidth--;
	}
}

lienzo.addEventListener('mousedown', (e) => {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;
});

lienzo.addEventListener('mousemove', draw);
lienzo.addEventListener('mouseup', () => {isDrawing = false;});
lienzo.addEventListener('mouseout', () => {isDrawing = false;});


lienzo.addEventListener('touchstart', (e) => {
	isDrawing = true;
	lastX = e.offsetX;
	lastY = e.offsetY;
});

lienzo.addEventListener('touchmove', draw);
lienzo.addEventListener('touchend', () => {isDrawing = false;});


