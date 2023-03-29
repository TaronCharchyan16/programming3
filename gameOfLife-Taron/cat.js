let LivingCreature = require ("./LivingCreature")
module.exports = class Cat extends LivingCreature{
    constructor(x, y) {
        super(x,)
        
        this.energy = 20;
        this.directions = [];
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
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }


    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
        }
    
        
     mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
   console.log(newCell);
        if (newCell && this.energy > 3) {
            let newX = newCell[0];
            let newY = newCell[1];

            let trch = new Cat(newX, newY);
            matrix[newY][newX] = 4;
            catArr.push(ct);

            this.energy = 20;
        }
    }



    eat() {
        let emptyCell = this.chooseCell(3);
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 4;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < catArr.length; i++) {
                if (catArr[i].x == newX && catArr[i].y == newY) {
                    catArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 20) {
                this.mul()
            }
        } 
        
        
        
        else {
            this.move()
        }
    }

    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

           
            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } 
    }


    die() {
        for (let i = 0; i < catArr.length; i++) {
            if (catArr[i].x == this.x && catArr[i].y == this.y) {
                catArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}

