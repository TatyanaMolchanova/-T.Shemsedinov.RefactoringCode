// Get month number

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const getMonthNumber = (month) => {
  return months.map(el => el.toLocaleLowerCase())
            .findIndex(m => m.startsWith(month)) + 1;
}

const result = getMonthNumber("february");
console.log(result);