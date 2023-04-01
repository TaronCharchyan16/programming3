let LivingCreature = require ("./LivingCreature")
module.exports = class Grass extends LivingCreature{
    
    constructor(x,y){
            super(x,y)
         
            this.multiply = 0
           
    }

    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }
    mul(){
        this.multiply++
        //var emptyCell = this.chooseCell(0)
        var newCell = this.random(0)

            if(this.multiply >= 8 && newCell){
                  var newX  = newCell[0]
                  var newY = newCell[1]

                  matrix[newY][newX] = 1

                  var gr  = new Grass(newX,newY)
                  grassArr.push(gr)
                  this.multiply = 0
            }

    }
    }
