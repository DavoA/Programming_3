var side = 5;
var matrix = [];
var socket = io();
function setup() {
    frameRate(5);
    background('#acacac');
    socket.on("getNewMatrix", function (mtx) {
        matrix = mtx;

        createCanvas(matrix[0].length * side, matrix.length * side);
        redraw();
        socket.on("redraw", function (mtx) {
            matrix = mtx;
            redraw();
        });
    });

    noLoop();
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj.index == 1) {
                if (weatherClient == "Summer") {
                    fill("green");
                }
                else if (weatherClient != "Summer") {
                    fill("#556B2F");
                }
                rect(x * side, y * side, side, side);

            }
            else if (obj.index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                //matrix[y][x].acted = false;

            }
            else if (obj.index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                //matrix[y][x].acted = false;

            }
            else if (obj.index == 4) {
                if (weatherClient == "Summer") {
                    fill("#E9967A");
                }
                else if (weatherClient != "Summer") {
                    fill("#8B4513");
                }
                rect(x * side, y * side, side, side);
                //matrix[y][x].acted = false;

            }
            else if (obj.index == 5) {
                fill("#000000");
                rect(x * side, y * side, side, side);
                //matrix[y][x].acted = false;

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

socket.on("exanak", drawWeather);

function drawWeather(w) {
    var p = document.getElementById('seasons');
    var weather = w;
    console.log(weather);
    if (weather == "Summer") {
        p.innerText = "Summer";
    }
    else if (weather == "Winter") {
        p.innerText = "Winter";
    }
    else if (weather == "Autumn") {
        p.innerText = "Autumn";
    }
    else if (weather == "Spring") {
        p.innerText = "Spring";
    }
}
var weatherClient = "Summer"
socket.on("exanak", function (w) {
    weatherClient = w;
});

function mousePressed() {

    var x = Math.floor(mouseX / side);
    var y = Math.floor(mouseY / side);
    arr = [x, y];
    
    console.log(arr);
    socket.emit("Sxmvec", arr)

}


function AtomayinBomb() {
    socket.emit("AtomayinBomb");
}







