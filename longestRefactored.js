// Find longest string

const longestCityName = (arr) => {
  let res = '';
  arr.map(str => { if (str.length > res.length) res = str });
  return res;
}

const result = longestCityName(['Roma', 'Kiev', 'Beijing', 'Barcelona', 'Omsk']);
console.log(result);