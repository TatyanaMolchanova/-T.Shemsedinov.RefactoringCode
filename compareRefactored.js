// Compare two dictionaries

const compareDictionaries = (prev, next) => {
    return JSON.stringify(prev) === JSON.stringify(next);
}

const result = compareDictionaries({ a: 1, c: 'hello' }, { a: 1, c: 'hello' });
const result1 = compareDictionaries({ a: 1, c: 'hello45' }, { a: 1, c: 'hello' });
console.log(result);
console.log(result1);
