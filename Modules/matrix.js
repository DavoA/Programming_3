var Grass = require("./class.grass");
var eatGrass = require("./class.eatgrass");
var Predator = require("./class.predator");
var Killer = require("./class.killer");
var Virus = require("./class.virus");
myGrassObject = new Grass(x,y,1);
myEatGrassObject = new eatGrass(x,y,2);
myPredatorObject = new Predator(x,y,3);
myKillerObject = new Killer(x,y,4);
myVirusObject = new Virus(x,y,5);
var matrix = [];
var n = m = 80;
function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.floor(Math.random() * Math.floor(5));
        }
    } 
    console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = myGrassObject;
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = myEatGrassObject;
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = myPredatorObject;
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = myKillerObject;
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = myVirusObject;
            }
        }
    }
    console.log(matrix);
} 
module.exports = matrix;