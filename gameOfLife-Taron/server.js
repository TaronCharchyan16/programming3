var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
res.redirect('index.html');
});

server.listen(3000, function() {
})
console.log("server okay")
function matrixGenerator(matrixSize, grass, grassEater, predator, mijat, trchun, cat) {
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
    for (let i = 0; i < cat; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6


    }
io.emit ("send matrix",matrix) 

    return matrix
}

matrix = matrixGenerator(35, 35, 25, 30, 20, 15, 10)

grassArr = []
grassEaterArr = []
predatorArr = []
mijatArr = []
trchunArr = []
catArr = []
const Grass = require("./grass")

const Predator = require("./predator")
const GrassEater = require("./grassEater")
const Mijat = require("./mijat")
const Cat = require("./cat")
const Trchun = require("./trchun")

function creatureObject() {
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
            } else if (matrix[y][x] == 6) {
                var ct = new Cat(x, y)
                catArr.push(ct)
            }
        }

    }
}
creatureObject()

function gameMove() {
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
    for (let i in catArr) {
        catArr[i].eat()
    }
    io.emit("send matrix",matrix)
}


setInterval(gameMove,1000)