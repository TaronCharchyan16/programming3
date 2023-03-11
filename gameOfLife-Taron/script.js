function matrixGenerator(matrixSize, grass, grassEater, predator, mijat, trchun) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }

    for (let i = 0; i < mijat; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }
    for (let i = 0; i < trchun; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }


    return matrix
}

var matrix = matrixGenerator(30, 40, 15, 5, 5, 8)
var side = 25
//

var grassArr = []
var grassEaterArr = []
var predatorArr = []
var mijatArr = []
var trchunArr = []



function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var mij = new Mijat(x, y)
                mijatArr.push(mij)
            } else if (matrix[y][x] == 5) {
                var trch = new Trchun(x, y)
                trchunArr.push(trch)
            }
        }
    }

}



function draw() {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            var tbot = side - side * 0.1
            textSize(tbot)
            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side,side,side)
                text('🌱',x * side, y * side + tbot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side,side,side)
                text('🐄',x * side, y * side + tbot)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side,side,side)
                text('🐅',x * side, y * side + tbot)
            } else if (matrix[y][x] == 4) {
                fill("purple")
                rect(x * side, y * side,side,side)
                text('🐜',x * side, y * side + tbot)
            } else if (matrix[y][x] == 5) {
                fill("black")
                rect(x * side, y * side,side,side)
                text('🦜',x * side, y * side + tbot)
            }
            else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }

    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in mijatArr) {
        mijatArr[i].eat()
    }
    for (let i in trchunArr) {
        trchunArr[i].eat()
    }
}
