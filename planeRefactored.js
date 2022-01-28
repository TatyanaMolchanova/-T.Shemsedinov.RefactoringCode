// Make nested array plane

const flatArray = (arr) => arr.flat(Infinity);

const result = flatArray([1, [[2]], [3, 4], [5], [6, [7, 8]]]);
console.log(result);