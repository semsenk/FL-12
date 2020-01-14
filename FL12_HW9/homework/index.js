// Your code goes here

// task#1
function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arr.push(Number(arguments[i]));
        } else {
            arr.push(String(arguments[i]));
        }
    }
    return arr;
}
// convert('1', 2, 3, '4');
// console.log(arr);

// task#2
function executeforEach(arr, callback) {
    let res_arr = arr;
    for(let i = 0; i < arr.length; i++) {
        res_arr[i] = callback(arr[i]);
    }
  console.log(res_arr);
}
// executeforEach([1,2,3], function(el){console.log(el * 2);});

// task#3
function mapArray(arr, callback) {
  return executeforEach(arr, callback); 
}
// console.log(mapArray([2, '5', 8], function(el) {return  Number(el) + 3;})); // returns [5, 8, 11]

//  task#4
function filterArray(arr, callback) {
    let res_arr = [];
    for(let i = 0; i < arr.length; i++) {
        if (callback(arr[i]) === true) {
            res_arr.push(arr[i]);
        }
    }
    return res_arr;
}
// console.log(filterArray([2, 5, 8], function(el) { return el % 2 === 0; }));// returns [2, 8]

// task#5
function flipOver(str) {
    str = str.split('');
    str = str.reverse('');
    str = str.join('');
    return str;
}

// console.log(flipOver('hey world')); // 'dlrow yeh'
 
// task#6
function makeListFromRange([start, end]) {
    let res_arr = [];

    for (start; start < end + 1; start++) {
        res_arr.push(start);
    }
    return res_arr;
}
// console.log(makeListFromRange([2, 7])); // [2, 3, 4, 5, 6, 7]

// task#7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, key) {
    let res_arr = [];
    for(let i = 0; i < arr.length; i++) {
        res_arr.push(arr[i][key]);
    }
    return res_arr;
}
// getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]

// task#8
function substitute(arr) {
    let res_arr = [];
    const thirty = 30;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < thirty) {
            res_arr.push('*');
        } else {
            res_arr.push(arr[i]);
        } 
    }
    return res_arr;
}
// substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

// task#9
let ONEDAYINSEC = 86400000;
let YEAR = 2019;
let MONTH = 0;
let NUMBER = 2;
const date = new Date(YEAR, MONTH, NUMBER);

function getPastDay(str1, str2) {
    let newDate = Date.parse(str1);
    let afterDay = str2 * ONEDAYINSEC;
    let oneDay = newDate - afterDay;
    let days = new Date(oneDay);
    let countDays = days.getDate();
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let dateFormat = days.getDate() + ' ' + month[days.getMonth()] + ' ' + days.getFullYear();
    console.log(countDays + ',' + ' ' + '(' + dateFormat + ')');
} 
// getPastDay(date, 1); // 1, (1 Jan 2019)
// getPastDay(date, 2); // 31, (31 Dec 2018)
// getPastDay(date, 365); // 2, (2 Jan 2018)

// task#10

function formatDate(arg) {
    let number = 1;
    let ten = 10;
    
    function zero(hours) {
        return hours < ten ? '0' + hours.toString() : hours.toString();
    }
  
    let newDate = new Date(arg);
    let date = newDate.getDate();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + number;
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    console.log(year + '/' + month + '/' + date + ' ' + zero(hours) + ':' + zero(minutes));
}
// formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"
// formatDate(new Date()); // "2020/1/7 12:56" // gets current local time
