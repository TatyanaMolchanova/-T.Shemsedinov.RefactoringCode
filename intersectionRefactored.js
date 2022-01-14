// Find an intersection of two dictionaries

const intersection = (obj1, obj2) => {
    const entriesObj1ToString = Object.entries(obj1).map(el => JSON.stringify(el));
    const entriesObj2ToString = Object.entries(obj2).map(el => JSON.stringify(el));
    const res = entriesObj1ToString
        .filter(entry => entriesObj2ToString.includes(entry))
        .map(el => JSON.parse(el));
    const resAsObject = Object.fromEntries(new Map([...res]));
    return resAsObject;
}

const result = intersection({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
const result1 = intersection({ a: 'uno', b: 'due', c: 'tre' }, { a: 'uno', c: 'tre' });
console.log(result);
console.log(result1);