// Sum all number values in dict

const sumValues = obj => {
    return Object.values(obj)
        .filter(elem => typeof elem === 'number')
        .reduce((prev, next) => prev + next);
}

const result = sumValues({ a: 1, b: 'two', c: 3, d: 4 });
console.log(result);