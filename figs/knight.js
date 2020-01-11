import Pair from '../aux/pair.js';

///////////
// Model //
///////////
function* model(i, j) {
  var s = [-1, 1, 1, -1]
  var p;
  for (var k=0; k<4; ++k) { 
    p = new Pair(i+2*s[k%4], j+1*s[(k+1)%4])
    if (p.valid()) yield p
  }
  for (var k=0; k<4; ++k) {
    p = new Pair(j+1*s[k%4], j+2*s[(k+1)%4])
    if (p.valid()) yield p
  }
}

//////////
// View //
//////////


////////////////
// Controller //
////////////////
export function getFields (i, j) {
  if (new Pair(i, j).valid()) return model(i, j)
  return false
}
