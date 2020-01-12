import Pair from '../aux/pair.js';

///////////
// Model //
///////////

function* model(p0, c) {
  console.log(c)
  if (c) {
    yield p0.plus(new Pair(-1, 0))
    if (p0.a == 6) yield new Pair(4, p0.b)
  } else {
    yield p0.plus(new Pair(1, 0)) 
    if (p0.a == 1) yield new Pair(3, p0.b)
  }
}

//////////
// View //
//////////


////////////////
// Controller //
////////////////

export function getFields(i, j, c) {
  var ca = {'w': true, 'b': false}
  var p = new Pair(i, j)
  if (p.valid()) return model(p, ca[c])
  return false
}
