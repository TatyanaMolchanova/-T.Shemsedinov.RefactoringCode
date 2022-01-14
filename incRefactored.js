// Increment all numbers in dictionary

const incrementAllNumbers = obj => {
    for (key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] += 1;
        }
    }
    return obj;
};

const result = incrementAllNumbers({ a: 1, b: 2, c: 'hello', d: false });
console.log(result);