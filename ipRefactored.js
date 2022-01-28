// Split string by the first occurrence of separator

const parseIp = ip => ip.split('.').map(el => +el)

const result = parseIp('127.0.0.1');
console.log(result);