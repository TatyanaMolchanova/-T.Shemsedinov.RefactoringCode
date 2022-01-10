// Extract substring between prefix and suffix

const getValueBetweenStartAndEnd = (str, start, end) => {
    if (!start) return '';

    const value = end ?
        str.substring(str.indexOf(start) + start.length, str.indexOf(end)) :
        str.substring(str.indexOf(start) + start.length);

    return value;
}

const result = getValueBetweenStartAndEnd('Hello <username> and bye!', '<', '>');
console.log(result);