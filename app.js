var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("./public"));

app.get('/', function (req, res) {
  res.redirect('index.html');
});

server.listen(3000);

var matrix = require("./Modules/matrix");
console.log(matrix);

io.on('connection', function (socket) {
  socket.emit("getNewMatrix", matrix);

  setInterval(function () {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x].index == 1) {
          matrix[y][x].mul(matrix);
        }
        else if (matrix[y][x].index == 2) {
          matrix[y][x].eat(matrix);
        }
        else if (matrix[y][x].index == 3) {
          matrix[y][x].eat(matrix);
        }
        else if (matrix[y][x].index == 4) {
          matrix[y][x].move(matrix);
        }
        else if (matrix[y][x].index == 5) {
          matrix[y][x].mul(matrix);
        }
      }
    }
    socket.emit("redraw", matrix);
  }, 2000);
});

io.on('connection', function (socket) {
  socket.on("Sxmvec", function (arr) {

  });
});
Weather = "Summer";
var WhetherInit = 0;
function draw_Weather() {
  WhetherInit++
  if (WhetherInit == 5) {
    WhetherInit = 1;
  }
  else if (WhetherInit == 1) {
    Weather = "Autumn";
  }
  else if (WhetherInit == 2) {
    Weather = "Winter";
  }
  else if (WhetherInit == 3) {
    Weather = "Spring";
  }
  else if (WhetherInit == 4) {
    Weather = "Summer";
  }
  io.socket.emit("exanak", Weather);
}

setInterval(draw_Weather, 6000);


