// Filter array by type name

const filterByType = (arr, typeOfFilteringData) => {
    return arr.filter(elem => typeof elem === typeOfFilteringData)
}

const result = filterByType([1, 2, 'three', 4, 5, 'six'], 'number');
const result2 = filterByType([1, 2, 'three', 4, 5, 'six'], 'string');
console.log(result);
console.log(result2);