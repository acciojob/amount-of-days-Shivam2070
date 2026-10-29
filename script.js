//your JS code here. If required.
// 1. Function definition
function daysOfAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    }
    return 365;
}

// 2. Taking input from the user
const inputYear = parseInt(prompt("Enter a year:"), 10);

// 3. Displaying the output
alert(daysOfAYear(inputYear));
