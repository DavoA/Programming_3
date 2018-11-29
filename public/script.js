// var matrix = [
//     [1,1,1,1,1,1,1,1,1,1,0,0,0,0,5,5,5],
//     [1,1,1,1,1,1,0,1,0,1,1,1,0,5,5,5,5],
//     [1,1,1,2,3,0,2,1,0,1,1,4,5,5,5,5,5],
//     [1,1,1,1,1,0,4,2,1,1,2,5,5,5,5,5,0],
//     [0,1,1,1,1,2,1,0,2,0,5,5,5,5,5,0,0],
//     [0,1,1,1,0,0,1,0,0,5,5,5,5,5,0,0,0],
//     [0,1,1,1,0,0,0,0,5,5,5,5,5,0,0,0,0],
//     [0,1,1,2,0,1,0,5,5,5,5,5,0,0,0,0,0],
//     [0,1,1,1,1,0,5,5,5,5,5,0,0,0,0,0,0],
//     [0,1,1,1,0,5,5,5,5,5,0,0,0,0,0,0,0],
//     [0,1,1,1,5,5,5,5,5,0,0,0,0,0,0,0,0],
//     [0,1,1,5,5,5,5,5,0,0,0,0,0,0,0,0,0],
//     [0,1,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0],
//     [1,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0],
//     [5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0],
//     [5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0],
//     [5,5,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ];

// var side = 35;

// function setup() {
//     frameRate(5);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 matrix[y][x] = new Grass(x, y, 1);
//             }
//             else if (matrix[y][x] == 2) {
//                 matrix[y][x] = new GrassEater(x, y, 2);
//             }
//             else if (matrix[y][x] == 3) {
//                 matrix[y][x] = new Gishatich(x, y, 3);
//             }
//             else if (matrix[y][x] == 4) {
//                 matrix[y][x] = new Vorsord(x, y, 4);
//             }
//             else if (matrix[y][x] == 5) {
//                 matrix[y][x] = new Police(x, y, 5);
//             }
//         }
//     }
//     console.log(matrix);

// }
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].move();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].mul();
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


var matrix = [];
var n = m = 80;
var side = 10;
function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = random([0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,4,5]);
        }
    }



    // matrix = [
    //     [3, 0, 1, 0, 0],
    //     [1, 0, 0, 2, 0],
    //     [0, 1, 0, 0, 0],
    //     [0, 0, 1, 0, 0],
    //     [1, 1, 0, 0, 0],
    //     [1, 1, 0, 0, 0],
    //     [1, 1, 0, 0, 0]
    //  ];
     
    console.log(matrix);
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Gishatich(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Vorsord(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Virus(x, y, 5);
            }
        }
    }
    console.log(matrix);
}

            
        
    

   




// function setup() {


// }
// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; ++) {x
//             if (matrix[y][x].index == 1) {
//                 matrix[y][x].mul();
//             }
//         }
//     }


//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             var obj = matrix[y][x];

//             if (obj.index == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }
// }