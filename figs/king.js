import Pair from '../aux/pair.js';
import {getController} from './_common_controller.js';

///////////
// Model //
///////////

function* model(p0) {
  var s = [0, 1, 0, -1, 0]
  for (var i=0; i < 4; ++i) {
    var p = p0.plus(new Pair(s[i], s[i+1]))
    if (p.valid()) yield p
  }
}

//////////
// View //
//////////


////////////////
// Controller //
////////////////

export var getFields = getController(model)

