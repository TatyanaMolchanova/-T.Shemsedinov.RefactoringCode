// Generate int array from given range

const range = (start, stop, step = 1) => 
  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))
  
const result = range(10, 15);
console.log('result', result);

require('../Exams/Tests/range.js')(range);
