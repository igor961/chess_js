import * as knight from './figs/knight.js'
import * as rook from './figs/rook.js'
import * as pawn from './figs/pawn.js'
import * as king from './figs/king.js'

var config = {
  fmt: 'svg',
  size: Math.min(window.innerHeight, window.innerWidth),
  container: 'app'
}

function play() {
  while(true) {
    //TODO: Game
    break
  } 
}

window.onload = () => {
  makeBoard()
  listenEvents()
  play()
};

///////////////////////////////////////////////////////////////
// Model //
///////////

var position = [
  [1, 5, 7, 9, 11, 7, 5, 1],
  [3, 3, 3, 3, 3, 3, 3, 3],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [2, 2, 2, 2, 2, 2, 2, 2],
  [0, 4, 6, 8, 10, 6, 4, 0],
];

function check(ctx = this) {

}

////////////
// Helper //
////////////

var l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function coordsToId(i, j) {
  return l[j]+(8-i)
}


function idToCoords(id) {
  var r = id.split('', 2)
  return [
    8-parseInt(r[1]), 
    l.indexOf(r[0])
  ]
}


function getNameAndColourFromId(id) {
  return id.split("_").slice(0, 2)
}

//////////
// View //
//////////

var container; 

var position_map = [
  ["rook", "w"], ["rook", "b"], 
  ["pawn", "w"], ["pawn", "b"], 
  ["knight", "w"], ["knight", "b"], 
  ["bishop", "w"], ["bishop", "b"], 
  ["queen", "w"], ["queen", "b"], 
  ["king", "w"], ["king", "b"], 
];

function makeBoard() {
  container = document.getElementById(config.container)
  var wSize = config.size
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
      rect.id = coordsToId(i, j);
      container.append(rect)
    }
  }

  for (var i=0; i<8; ++i)
    for (var j=0; j<8; ++j) {
      var f = position[i][j]
      if (f === -1) continue;
      draw.apply(container.children[i*8+j], position_map[f])
    }

}

function draw(name, colour, fmt = config.fmt) {
  var el = this;
  console.log(el, name, colour)
  var path = fmt+"/"+name+"_"+colour+"."+fmt
  var r_w, r_h, r_w_e, r_h_e
  r_w = el.offsetWidth * 0.75
  r_w_e = (el.offsetWidth - r_w)/2
  r_h = el.offsetHeight * 0.75
  r_h_e = (el.offsetHeight - r_h)/2;
  el.insertAdjacentHTML('beforeend', '<img id="'+name+'_'+colour+"_"+el.id+'" src="'+path+'" alt="" style="width: '+r_w+'px;height: '+r_h+'px;margin: '+r_h_e+'px '+r_w_e+'px;cursor:pointer;" draggable="true">')
}

////////////////
// Controller //
////////////////
function listenEvents() {
  container.addEventListener('dragstart', function(e1) {
    console.log("---------------")
    console.log("OnDragStart")
    var parent = e1.target.parentNode
    var figureParams = getNameAndColourFromId(e1.target.id)
    console.log(figureParams)
    var figure
    try {
      figure = eval(figureParams[0]);
    } catch (e) {
      console.log(e.message);
      return; 
    }
    var coords = idToCoords(parent.id)
    var fields = figure.getFields(coords[0], coords[1], figureParams[1])
    console.log(parent, fields)
    createDropListeners(fields, function(e2) {
      e2.preventDefault()
      var id = e1.target.id
      console.log("ID ", id, "Parent ", parent)
      document.getElementById(id).remove()
      var nc = getNameAndColourFromId(id)
      draw.apply(e2.target, nc)
      deleteDropListeners(fields)
    })
  })

  container.addEventListener('dragover', function(e) {
    console.log("OnDragOver")
    e.preventDefault()
  })

  container.addEventListener('drop', function(e) {
    console.log("OnDrop")
    e.preventDefault()
  })

  function createDropListeners(arr, cb) {
    for (var f of arr) {
      console.log(f)
      document.getElementById(coordsToId(f.a, f.b)).ondrop = cb;
    }
  }

  function deleteDropListeners(arr) {
    createDropListeners(arr, null)
  }
}
