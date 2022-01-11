// Find a difference between two dictionaries

const findDifference = (obj1, obj2) => {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) return false;
    
    const copyObj1 = JSON.parse(JSON.stringify(obj1));
    const keysObj1 = Object.keys(obj1).sort();
    const keysObj2 = Object.keys(obj2).sort();

    for (let i = 0; i < keysObj1.length; i++) {
       
        if (!keysObj1.includes(keysObj2[i])) {
            return { [keysObj1[i]]: obj1[keysObj1[i]] };
        }
    }

    for (const key in obj2) {
        
        if (obj1[key] === obj2[key]) {
            delete copyObj1[key];
        }

        return copyObj1;
    }
}

const result = findDifference({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
console.log(result);