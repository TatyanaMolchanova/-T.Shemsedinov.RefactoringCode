// Replace substring with newstr

const replacing = (str, substring, newstr) => {
    if (!substring) return str;
    return str.replaceAll(substring, newstr);
}
  
const result = replacing('Hello <username> and bye!', '<username>', 'Marcus');
console.log('result', result);

require('../Exams/Tests/replace.js')(replacing);