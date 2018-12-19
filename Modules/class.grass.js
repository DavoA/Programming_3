var LivingCreature = require("./class.livingcreature");

module.exports = class Grass extends LivingCreature {


    mul(matrix) {
        this.multiply++;
        var newCell = random(this.chooseCell(0,matrix));

        if (newCell && this.multiply >= 2) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = new Grass(newX, newY, 1);
            this.multiply = 0;

        }
    }

}

