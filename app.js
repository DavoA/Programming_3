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
  function draw_Weather() {
    WhetherInit++
    if (WhetherInit == 5) {
      WhetherInit = 0;
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
    socket.emit("exanak", Weather);
  }

  setInterval(draw_Weather, 6000);
});

Weather = "Summer";
var WhetherInit = 0;




io.on('connection', function (socket) {
  socket.on("Sxmvec", function (arr) {
    var x = arr[0];
    var y = arr[1];



    var directions = [
      [x - 2, y - 2],
      [x - 1, y - 2],
      [x, y - 2],
      [x + 1, y - 2],
      [x + 2, y - 2],
      [x - 2, y - 1],
      [x - 1, y - 1],
      [x, y - 1],
      [x + 1, y - 1],
      [x + 2, y - 1],
      [x - 2, y],
      [x - 1, y],
      [x + 1, y],
      [x + 2, y],
      [x - 2, y + 1],
      [x - 1, y + 1],
      [x, y + 1],
      [x + 1, y + 1],
      [x + 2, y + 1],
      [x - 2, y + 2],
      [x - 1, y + 2],
      [x, y + 2],
      [x + 1, y + 2],
      [x + 2, y + 2]
    ];


    if (matrix[y][x] == 1) {
      for (var i in grassArr) {
        if (y == grassArr[i].y && x == grassArr[i].x) {
          grassArr.splice(i, 1);
          break;
        }

      }
    }
    else if (matrix[y][x] == 2) {
      for (var i in grasseaterArr) {
        if (y == grasseaterArr[i].y && x == grasseaterArr[i].x) {
          grasseaterArr.splice(i, 1);
          break;
        }

      }
    }
    else if (matrix[y][x] == 3) {
      for (var i in predatorArr) {
        if (y == predatorArr[i].y && x == predatorArr[i].x) {
          predatorArr.splice(i, 1);
          break;
        }

      }
    }

    matrix[y][x] = 0;


    for (var i in directions) {
      var harevanX = directions[i][0];
      var harevanY = directions[i][1];
      if (harevanX >= 0 && harevanX < matrix[0].length && harevanY >= 0 && harevanY < matrix.length) {
        if (matrix[harevanY][harevanX] == 1) {
          for (var i in grassArr) {
            if (harevanY == grassArr[i].y && harevanX == grassArr[i].x) {
              grassArr.splice(i, 1);
              break;
            }

          }
        }

        else if (matrix[harevanY][harevanX] == 2) {
          for (var i in grasseaterArr) {
            if (harevanY == grasseaterArr[i].y && harevanX == grasseaterArr[i].x) {
              grasseaterArr.splice(i, 1);
              break;
            }

          }
        }
        else if (matrix[harevanY][harevanX] == 3) {
          for (var i in predatorArr) {
            if (harevanY == predatorArr[i].y && harevanX == predatorArr[i].x) {
              predatorArr.splice(i, 1);
              break;
            }

          }
        }

        matrix[harevanY][harevanX] = 0;
      }

    }


    io.sockets.emit("matrix", matrix);

  });
  socket.on("AtomayinBomb", function () {
    for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
        matrix[y][x] = 6
      }
    }

    grassArr.length = 0;
    grasseaterArr.length = 0;
    predatorArr.length = 0;
    io.sockets.emit("matrix", matrix);
  })
});
