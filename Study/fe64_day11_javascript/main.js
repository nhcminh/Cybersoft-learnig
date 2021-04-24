// console.log('Hello Minh!')


var _name = "Minh";
console.log(_name);

var lastName = "Minh";
var firstName = "Nguyen"
var fullName = firstName + " " + lastName;
console.log(fullName);

var number_1 = 123;

var number_2 = 123;

var number_3 = "123";
console.log(number_1 + number_2);
console.log(number_2 + number_3);

// var stats = fasle/true ; kieu boolean

// var lop ; kieu undefined

// var abc = null; kieu null


// Hoisting

console.log(username);
var username = "Cybersoft";


/**
 * Hang so (const) - ES6
 */

const PI = 3.14;



/**
 * Conditions - boolean: true/false
 */


a = 1;
b = "1";
c = "";
c = !(a == b) ? console.log('true') : console.log('false');


var _number = 0;
while (_number < 4) {
    switch (_number) {
        case 0:
            { console.log("so 0"); break; }
        case 1:
            { console.log("so 1"); break; }
        case 2:
            console.log("This is 2");
            break
        default:
            console.log("Khong biet");
            break;
    }
    _number++;
}

// let sum = 0;

function add(a, b) {
    var sum = a + b;
    return sum;
}


add(5, 7);


// console.log(sum);

// var avg_score = 0;

function avg(a, b, c) {
    return (a + b + c) / 3;
}


function xeploai(avg_score) {
    // switch (avg_score) {
    if (6 > avg_score && avg_score > 5) {
        console.log("TB");
    } else if (9 > avg_score && avg_score > 8) {
        console.log("Gioi");
    } else if (8 > avg_score && avg_score > 7)
        console.log("Kha");
    // break;
    else if (7 > avg_score && avg_score > 6)
        console.log("TB Kha");
    // break;
    else if (avg_score > 5)
        console.log("XS");
    // break;
    else if (avg_score < 5)
        console.log("Yeu");
    // break;
    else console.log("khong xep loai");
    // }
}

var avg_score = avg(6, 6, 6);
console.log(avg_score)
xeploai(avg_score);