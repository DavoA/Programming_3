module.exports = class eatGrass {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
        return super.chooseCell(num,matrix);
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
    }
    die() {
        matrix[this.y][this.x] = 0;
    }
    mul(matrix) {
        var newCell = random(this.chooseCell(0,matrix));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new GrassEater(newX, newY, 2);

        }

    }
}