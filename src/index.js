
exports.min = function min (array) {
    let min;
    if(!array || array.length === 0) return 0;
    min = Math.min(...array);
  return min
}

exports.max = function max (array) {
    let max;
    if(!array || array.length === 0) return 0;
    max = Math.max(...array);
    return max;
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0;
    const sum = array.reduce((prev, current) => prev += current, 0);
    return sum / array.length;
}
