module.exports = class eatGrass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
        this.acted = false;
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
    chooseCell(num,matrix) {
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

                this.y = newY;
                this.x = newX;
                this.acted = true;
            }
            this.energy--;
            if (this.energy <= 0) {
                this.die(matrix);
            }
        }
        else this.acted = false;

    }
    eat(matrix) {
        var newCell = random(this.chooseCell(1,matrix));
        if (this.acted == false) {
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.y = newY;
                this.x = newX;
                this.energy += 2;
                this.acted = true;

                if (this.energy >= 10) {
                    this.mul(matrix);
                    this.energy = 4;
                }
            } else {
                this.move(matrix);
            }


        }
        else this.acted = false;
    }
    die(matrix) {
        matrix[this.y][this.x] = 0;
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new eatGrass(newX, newY, 2);

        }

    }
}
function random(arr)
{
    return arr[Math.floor(Math.random()*arr.length)]
}
