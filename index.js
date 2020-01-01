import Figure from "./figs/figure.js"

var position;
var l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function makeBoard() {
  if (position != undefined) {
    var container=document.getElementById("app")

    var wSize = Math.min(window.innerHeight, window.innerWidth)
    container.style.width = wSize/2 + 1 + "px"
    container.style.height = wSize/2 + 1 + "px"

    console.log("Window size", wSize)
    console.log("i elem in Array", position[0][1])

    function createRect(size="50px", colour="black") {
      function Rect() {
        this.style.width = size
        this.style.height = size
        this.style.background = colour
        this.style.float = "left"
        return this
      }
      return Rect.call(document.createElement("div"))
    }

    for (var i=0; i<8;i++) {
      for (var j=0; j<8; j++) {
        var rect = createRect(wSize/16+"px", ((i+j)%2!==0)?"#a0a0a0":"#eee", l[j]+(8-i))
        rect.id = l[j]+(i+1);
        [ rect.i, rect.j ] = [ i, j ];
        container.append(rect)
      }
    }
    setFigs(position)

    function setFigs(arr) {

      for (var i=0; i<8;i++) {
        for (var j=0; j<8; j++) {
          if (arr[i][j]!=undefined) 
            arr[i][j].draw(document.getElementById(l[j]+(i+1)));
        }
      }
    }

    document.addEventListener('dragstart', function(e) {
      console.log("OnDragStart")
      e.dataTransfer.setData("el", e.target.id)
    })

    container.addEventListener('dragover', function(e) {
      console.log("OnDragOver")
      e.preventDefault()
    })

    container.addEventListener('drop', function(e) {
      console.log("OnDrop")
      e.preventDefault()
      var el = e.dataTransfer.getData("el")
      if (!e.target.firstChild)
        e.target.append(document.getElementById(el))
      console.log(position)
    }) 
  }
}

function clearBoard() {
  position = [[new Figure("b", "rook"), new Figure("b", "knight"), new Figure("b", "bishop"), new Figure("b", "queen"), new Figure("b", "king"), new Figure("b", "bishop"), new Figure("b", "knight"), new Figure("b", "rook")], 
    [new Figure("b", "pawn"), new Figure("b", "pawn"), new Figure("b", "pawn"), new Figure("b", "pawn"), new Figure("b", "pawn"), new Figure("b", "pawn"), new Figure("b", "pawn"), new Figure("b", "pawn")], 
    [], 
    [], 
    [], 
    [],
    [new Figure("w", "pawn"), new Figure("w", "pawn"), new Figure("w", "pawn"), new Figure("w", "pawn"), new Figure("w", "pawn"), new Figure("w", "pawn"), new Figure("w", "pawn"), new Figure("w", "pawn")],
    [new Figure("w", "rook"), new Figure("w", "knight"), new Figure("w", "bishop"), new Figure("w", "queen"), new Figure("w", "king"), new Figure("w", "bishop"), new Figure("w", "knight"), new Figure("w", "rook")]];

  for (var i=0; i<8;i++) {
    for (var j=0; j<8; j++) {
      if (position[i][j]!=undefined) position[i][j].setId(i+j)
    }
  }

  console.log(position)
}

function play() {
  while(true) {
    //TODO: Game
    break
  } 
}

window.onload = () => {
  clearBoard()
  makeBoard()
  play()
};

