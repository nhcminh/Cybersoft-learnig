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
    if (6 > avg_score && avg_score >= 5) {
        console.log("TB");
    } else if (9 > avg_score && avg_score >= 8) {
        console.log("Gioi");
    } else if (8 > avg_score && avg_score >= 7)
        console.log("Kha");
    // break;
    else if (7 > avg_score && avg_score >= 6)
        console.log("TB Kha");
    // break;
    else if (avg_score >= 5)
        console.log("XS");
    // break;
    else if (avg_score <= 5)
        console.log("Yeu");
    // break;
    else console.log("khong xep loai");
    // }
}

var avg_score = avg(6, 6, 6);
console.log(avg_score)
xeploai(avg_score);




// _btn = document.getElementById('btn-click').onclick = function() {
//     console.log(123123123)
//     var _input = document.getElementById('txt').value;
//     console.log(_input)
// }

// document.getElementById('btn-click').addEventListener('click', function() {
//     console.log(12312312);
// })


// $('#btn-click').click(function(){ console.log(123) })

function handleClick() {
    var _input = document.getElementById('txt').value;
    console.log(_input);
}

// function btnclick() {
document.getElementById('btn-click2').onclick = function() {
        document.getElementById('change').innerText = "em phe qua nhan nua di";
        document.getElementById('btn-click2').addEventListener('click', function() {
            document.getElementById('change').innerText = "kimochi";
            document.getElementById('btn-click2').removeAttribute('event-listener');
        })
    }
    // }


document.getElementById('disable').addEventListener('click', function() {
    document.getElementById('btn-click2').disabled = true;
})
document.getElementById('enable').onclick = function() {
    document.getElementById('btn-click2').disabled = false;
}



var _light = document.getElementById('light');

var _on = document.getElementById('on');
var _off = document.getElementById('off');

_on.addEventListener('click', function() {
    // _light.setAttribute('src', './imgs/pic_bulbon.gif');
    _light.src = "./imgs/pic_bulbon.gif"
})
_off.addEventListener('click', function() {
    // _light.setAttribute('src', './imgs/pic_bulboff.gif');
    _light.src = './imgs/pic_bulboff.gif';
})







/**
 * Validations
 */


var _notice = document.getElementById('notice');

var _btnsubmit = document.getElementById('btn-submit');

_btnsubmit.addEventListener('click', function(event) {
    event.preventDefault();
    var _username = document.getElementById('username').value;
    var _password = document.getElementById('password').value;
    if (_username == 'cybersoft' && _password == 123456) {
        _notice.innerHTML = "login thanh cong";
        _notice.classList.add('alert-success');
        _notice.classList.remove('alert-danger');
    } else {
        _notice.innerHTML = "login that bai";
        _notice.classList.add('alert-danger');
        _notice.classList.remove('alert-succes');
    }
})