// Change double quotation to open or close quotation

const quotes = str => {
  const res = str.split('').map((letter, index) => {
    if (letter === '"' && (str[index - 1] === ' ' || index === 0)) letter = '«';
    if (letter === '"' && str[index - 1] !== ' ') letter = '»';
    return letter;
  });
  return res.join('');
}

// const result = quotes('');
// const result = quotes('""');
// const result = quotes('Marcus');
// const result = quotes('"Marcus"');
// const result = quotes('Ave! "Marcus"');
// const result = quotes('"Marcus" Ave!');
// const result = quotes('Hello "Marcus"! Ave "Marcus"');
// const result = quotes('"Marcus"! Ave "Marcus"!');
const result = quotes('Hello "Marcus"! Ave "Marcus"!');
console.log(result);