module.exports = class Virus {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.tariq = 1;
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix && y >= 0 && y < matrix) {
                if (matrix[y][x] == num) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul(matrix) {
        this.multiply++;
        this.tariq++;
        var datarkner = this.chooseCell(0,matrix);

        console.log(datarkner);

        if (datarkner.length > 0 && this.multiply >= 30) {
            for (var i in datarkner) {
                var newX = datarkner[i][0];
                var newY = datarkner[i][1];
                matrix[newY][newX] = 0;
                matrix[newY][newX] = new Virus(newX, newY, 5);
                this.multiply = 0;
                
            }
            
        }
        
        if(this.tariq == 40)
        {
            this.die(matrix);
        }

    }
    die(matrix)
    {
        matrix[this.y][this.x] = 0;
    }

}

