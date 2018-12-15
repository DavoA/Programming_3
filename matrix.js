var Grass = require("./Modules/class.grass");
var eatGrass = require("./Modules/class.eatgrass");
var Predator = require("./Modules/class.predator");
var Killer = require("./Modules/class.killer");
var Virus = require("./Modules/class.virus");
myGrassObject = new Grass(x,y,1);
myEatGrassObject = new eatGrass(x,y,2);
myPredatorObject = new Predator(x,y,3);
myKillerObject = new Killer(x,y,4);
myVirusObject = new Virus(x,y,5);
var time = frameRate(5)
function frameRate(frameCount)
{
    return 1000 / frameCount;
}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                GrassMain();
            }
            else if (matrix[y][x].index == 2) {
                eatGrassMain();
            }
            else if (matrix[y][x].index == 3) {
                PredatorMain();
            }
            else if (matrix[y][x].index == 4) {
                KillerMain();
            }
            else if (matrix[y][x].index == 5) {
                VirusMain();
            }
        }
    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];

            if (obj.index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (obj.index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (obj.index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (obj.index == 4) {
                fill("#53320B");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (obj.index == 5) {
                fill("#808000");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }
    }
}
setInterval(draw,time);
