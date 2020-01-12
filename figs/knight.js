import Pair from '../aux/pair.js';
import {getController} from './_common_controller.js';

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

export var getFields = getController(model)
