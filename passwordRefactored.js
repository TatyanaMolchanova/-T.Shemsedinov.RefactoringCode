// Generate random password

let generatePassword = (str, passwordLength) => {    
    let newStr = '';

    while (newStr.length < Math.floor(passwordLength / 2)) {
        newStr += str[Math.floor(Math.random() * str.length)]
    }

    const password = new Array(Math.ceil(passwordLength / 2))
        .fill()
        .map(() => String.fromCharCode(Math.random()*86+40))
        .join("") + newStr;

    return password;
}

const result = generatePassword('abc123', 7);
console.log(result);