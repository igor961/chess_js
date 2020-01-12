import Pair from '../aux/pair.js';

export function getController(model) {
  return function getFields(i, j, c) {
    var ca = {'w': true, 'b': false}
    var p = new Pair(i, j)
    if (p.valid()) return Array.from(model(p, ca[c]))
    return false
  }
}
