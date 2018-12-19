module.exports = class Killer {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
        this.acted = false;
        this.energy = 20;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(num, num1,matrix) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x].index == num) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x].index == num1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    move(matrix) {
        var newCell = random(this.chooseCell(0,matrix));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.energy--;
                this.y = newY;
                this.x = newX;

                this.kill(matrix);
                this.acted = true;
            }
        }
        else this.acted = false;
    }
    kill(matrix) {
        var xotakerner = this.chooseCell(2,matrix);

        if (xotakerner.length > 0) {
            for (var i in xotakerner) {
                var newX = xotakerner[i][0];
                var newY = xotakerner[i][1];
                matrix[newY][newX] = 0;
            }
        }
        var gishatichner = this.chooseCell(3,matrix);

        if (gishatichner.length > 0) {
            for (var i in gishatichner) {
                var newX = gishatichner[i][0];
                var newY = gishatichner[i][1];
                matrix[newY][newX] = 0;
            }
        }
    }
}
