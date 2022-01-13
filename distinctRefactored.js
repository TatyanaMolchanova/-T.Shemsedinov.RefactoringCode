// Remove duplicates in array

const removeDuplicates = arr => [...new Set(arr)]

const result = removeDuplicates([1, 2, 1, 3, 1, 4])
console.log(result)