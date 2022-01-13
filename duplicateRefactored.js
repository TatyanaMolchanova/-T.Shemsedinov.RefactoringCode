// Push given value multiple times

const repeat = (value, repeatTimes) => {
    if (repeatTimes <= 0) return [];
    const res = [];
    for (let i = 0; i < repeatTimes; i++) {
        res[i] = value;
    }
    return res;
}



const result = repeat('abc', 5);
console.log(result);