// Delete listed keys from dictionary

const deleteKeys = (obj, ...keys) => {
    const objKeys = Object.keys(obj);

    keys.map(el => {
        if (objKeys.includes(el)) delete obj[el];
        return obj;
    });

    return obj;
}

const result = deleteKeys({ a: 'uno', b: 'due', c: 'tre' }, 'b', 'f');
console.log(result);