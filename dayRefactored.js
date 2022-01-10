// Get day number

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = searchedDay => {
    return week.map((el, index) => {
                    if (searchedDay.startsWith(el.toLowerCase())) return index + 1; })
                .find(day => day);
}

const result = parseDay('friday');
console.log(result);