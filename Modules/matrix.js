var Grass = require("./class.grass");
var eatGrass = require("./class.eatgrass");
var Predator = require("./class.predator");
var Killer = require("./class.killer");
var Virus = require("./class.virus");
var matrix = [];
var n = m = 80;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
        matrix[y][x] = randomItemFromArray([0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,4,5]);
    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            matrix[y][x] = new Grass(x,y,1);
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new eatGrass(x,y,2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Predator(x,y,3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Killer(x,y,4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Virus(x,y,5);
        }
    }
}
function randomItemFromArray(arr)
{
    return arr[Math.floor(Math.random()*arr.length)]
}
module.exports = matrix;