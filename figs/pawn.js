import Pair from '../aux/pair.js';
import {getController} from './_common_controller.js';

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

export var getFields = getController(model)
