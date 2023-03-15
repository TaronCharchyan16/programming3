class Trchun extends LivingCreature{
    constructor(x, y) {
        super(x,)
        
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

    
     mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)
   console.log(newCell);
        if (newCell && this.energy > 4) {
            let newX = newCell[0];
            let newY = newCell[1];

            let mij = new Trchun(newX, newY);
            matrix[newY][newX] = 5;
            trchunArr.push(mij);

            this.energy = 30;
        }
    }



    eat() {
        let emptyCell = this.chooseCell(3);
        let newCell = random(emptyCell)

        if (newCell) {
            this.energy += 4;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < trchunArr.length; i++) {
                if (trchunArr[i].x == newX && trchunArr[i].y == newY) {
                    trchunArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5;
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
        for (let i = 0; i < trchunArr.length; i++) {
            if (trchunArr[i].x == this.x && trchunArr[i].y == this.y) {
                trchunArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}




