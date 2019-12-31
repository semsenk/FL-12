function isLeapYear() { 
    let d = new Date(arguments[0]);
    let y = d.getFullYear();

    if (isNaN(d)) {
        return 'Invalid Date';
    } else if (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)) {
        return (`${y} is a leap year`);
    } else {
        return(`${y} is a leap year`);
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);
 
