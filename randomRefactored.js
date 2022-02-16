// Generate random integer value in given range

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
  
const result = random(0, 10);
console.log('result', result);

require('../Exams/Tests/random.js')(random);