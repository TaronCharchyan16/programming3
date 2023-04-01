let LivingCreature = require ("./LivingCreature")
module.exports = class Mijat extends LivingCreature{
    constructor(x,y) {
        super(x,y)
       
        this.energy = 30;
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


    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }

     //բազմանալ
     mul() {
        //let emptyCell = this.chooseCell(0);
        let newCell = this.random(0)
 ;
        if (newCell && this.energy > 4) {
            let newX = newCell[0];
            let newY = newCell[1];

            let mij = new Mijat(newX, newY);
            matrix[newY][newX] = 2;
            mijatArr.push(mij);

            this.energy = 30;
        }
    }


//ուտել
    eat() {
        //let emptyCell = this.chooseCell(3);
        let newCell = this.random(0)

        if (newCell) {
            this.energy += 4;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 30) {
                this.mul()
            }
        } 
        
        
        
        else {
            this.move()
        }
    }

    //քայլել
    move() {
        //let emptyCell = this.chooseCell(0);
        let newCell = this.random(0)

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
        for (let i = 0; i < mijatArr.length; i++) {
            if (mijatArr[i].x == this.x && mijatArr[i].y == this.y) {
                mijatArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}




