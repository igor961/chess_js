import Figure from "./figs/figure.js"

var position;
var rels;
function makeBoard() {
  if (position != undefined) {
    var container=document.getElementById("app")

    var wSize = Math.min(window.innerHeight, window.innerWidth)
    container.style.width = wSize/2 + 1 + "px"
    container.style.height = wSize/2 + 1 + "px"
    var rects=[[]]; 

    console.log("Window size", wSize)
    console.log("i elem in Array", position[0][1])

    function createRect(size="50px", colour="black", id=Date.now()) {
      var el = document.createElement("div")
      el.style.width = size
      el.style.height = size
      el.style.background = colour
      el.style.float = "left"
      el.id = id;
      rects.push(el)
      return el
    }

    for (var i=0; i<8;i++) {
      for (var j=0; j<8; j++) {
        container.append(createRect(wSize/16+"px", ((i+j)%2!==0)?"#a0a0a0":"#eee", i*8+j))
      }
    }
    //console.log(rects)
    setFigs(position)

    function setFigs(arr) {
      var fig;

      console.log(arr)

      for (var i=0; i<8;i++) {
        for (var j=0; j<8; j++) {
          //        debugger;
          if (arr[i][j]!=undefined) arr[i][j].draw(rects[8*i+j+1])
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

