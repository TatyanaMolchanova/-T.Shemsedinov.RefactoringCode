// Copy all values from dict except listed

const copyEntriesExcludeSomeKeys = (obj, ...keysExcluded) => {
    const copiedObj = JSON.parse(JSON.stringify(obj));
    const objKeys = Object.keys(copiedObj);
    
    keysExcluded.map(key => {
        if (objKeys.includes(key)) delete copiedObj[key];
        return copiedObj;
    })
    return copiedObj;
}

const result = copyEntriesExcludeSomeKeys({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);