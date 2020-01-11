import Pair from '../aux/pair.js';

///////////
// Model //
///////////
function* model(p0) {
  var s = [-1, 1, 1, -1]
  var p
  for (var k=0; k<8; ++k) {
    p = new Pair(2*s[k%4], 1*s[(k+1)%4]);
    if (k>3) p = p.reverse()
    p = p0.plus(p)
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
  var p = new Pair(i, j)
  if (p.valid()) return model(p)
  return false
}
