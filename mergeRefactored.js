// Merge two dictionaries

mergeObjects = (...objects) => Object.assign({}, ...objects);

const result = mergeObjects({ a: 'uno', b: 'due' }, { c: 'tre' });
console.log(result);