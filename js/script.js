var chess = document.getElementById('chess');
var context = chess.getContext('2d');

context.strokeStyle = '#bfbfbf';


drawChessBoard();
oneStep(0, 0, true);
oneStep(1, 1, false);


function drawChessBoard() {
  for (var i=0; i<15; i++) {
    context.moveTo(15+i*30, 15);
    context.lineTo(15+i*30, 435);
    context.stroke();
    context.moveTo(15, 15+i*30);
    context.lineTo(435, 15+i*30);
    context.stroke();
  }
}

function oneStep(i, j, me) {
  // 画圆
  context.beginPath();
  context.arc(15+i*30, 15+j*30, 13, 0, 2*Math.PI);
  context.closePath();
  var gradient = context.createRadialGradient(15+i*30+2, 15+j*30-2, 13, 15+i*30+2, 15+j*30-2, 0);
  if (me) {
    gradient.addColorStop(0, '#0A0A0A');
    gradient.addColorStop(1, '#636766');
  } else {
    gradient.addColorStop(0, '#D1D1D1');
    gradient.addColorStop(1, '#F9F9F9');
  }
  context.fillStyle = gradient;
  context.fill(); // 填充
}
