// Copy only listed values from dict

const copyListedKeys = (obj, ...listedKeys) => {
    let newObj = {};

    for (const [key, value] of Object.entries(obj)) {

        if (listedKeys.includes(key)) {
             newObj[key] = value;
        }
        
    }

    return newObj;
}

const result = copyListedKeys({ a: 1, b: 'two', c: 3, d: 4 }, 'a', 'd');
console.log(result);