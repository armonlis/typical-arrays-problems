
exports.min = function min (array = []) {
  return array.length == 0 ? 0: array.sort((a, b) => a - b)[0];
}

exports.max = function max (array = []) {
  return array.length == 0 ? 0: array.sort((a, b) => a - b)[array.length - 1];
}

exports.avg = function avg (array = []) {
  return array.length == 0 ? 0: array.reduce((sum, el) => sum + el, 0) / array.length;
}
