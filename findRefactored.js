// Find key by value

const findKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value);
};

const result = findKey({ a: 1, b: 2, c: 'hello', d: false }, 'hello');
console.log(result);