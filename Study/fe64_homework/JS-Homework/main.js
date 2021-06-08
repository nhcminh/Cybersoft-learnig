document.querySelector("#showTableBtn").addEventListener("click", function () {
    var content = "";
    for (let index = 0; index < 10; index++) {
        content += `<tr>`;
        for (let index2 = 0; index2 < 10; index2++) {
            content += ` <td> ${index2 + index * 10 + 1} </td>`;
        }
        content += `</tr>`;
    }
    document.querySelector("#tbl").innerHTML = content;
});

document
    .querySelector("#primeNumberBtn")
    .addEventListener("click", function () {
        var str = document.querySelector("#input2").value;
        var primeNumberArr = str.split(" ");
        primeNumberArr = primeNumberArr.toString();
        primeNumberArr = primeNumberArr.split(",");
        var result = document.querySelector("#result2");
        var mess = "Prime Number is: ";

        for (let index = 0; index < primeNumberArr.length; index++) {
            if (primeNumberArr[index] == 1) mess += primeNumberArr[index] + " ";
            else if (checkPrime(primeNumberArr[index])) {
                mess += primeNumberArr[index] + " ";
            }
        }
        result.innerHTML = mess;

        function checkPrime(num) {
            for (var i = 2; i < num; i++) {
                if (num % i === 0) return false;
            }

            return num > 1;
        }
    });

document
    .querySelector("#randomNumberBtn")
    .addEventListener("click", function () {
        var num = document.querySelector("#input3").value;
        var result = document.querySelector("#result3");
        var mess = "SUM is: ";
        mess += sum(num);
        result.innerHTML = mess;

        function sum(num) {
            var sum = 0;
            for (var i = 2; i <= num; i++) {
                sum += i;
            }
            return sum + num * 2;
        }
    });
document
    .querySelector("#divisorNumberBtn")
    .addEventListener("click", function () {
        var num = document.querySelector("#input4").value;
        var result = document.querySelector("#result4");
        var mess = "Divisors of " + num + " are: ";
        checkDividor(num);
        result.innerHTML = mess;

        function checkDividor(num) {
            for (var i = num; i >= 1; i--)
                if (num % i === 0) mess += i + ", ";
            return mess;
        }
    });
document.querySelector("#reverseBtn").addEventListener("click", function () {
    var num = document.querySelector("#input5").value;
    var result = document.querySelector("#result5");
    var mess = "Reverse number of " + num + " is: " + reverseNum(num);
    result.innerHTML = mess;

    function reverseNum(num) {
        var revNum = "";
        for (let index = num.length; index > 0; index--) {
            var item = num.slice(index - 1, index);
            revNum += item;
        }
        return revNum;
    }
});
document.querySelector("#findMaxXBtn").addEventListener("click", function () {
    var result = document.querySelector("#result6");
    var mess = "Max x is: ";
    var sum = 0;
    var x = 0;
    while (sum <= 100) {
        sum += x;
        if (sum > 100) { x -= 1; break; }
        x++;
    }
    mess += x;
    result.innerHTML = mess;
});
document.querySelector("#multiTableBtn").addEventListener("click", function () {
    var num = document.querySelector("#input7").value;
    var result = document.querySelector("#result7");
    var mess = `<h4>Multiplication Table</h4>`;
    num = Number(num);
    var i = 1;
    while (i < 11) {
        mess += `<p>${num} x ${i} = ${num * i}</p>`;
        i++;
    }
    result.innerHTML = mess;
});
document.querySelector("#playCardBtn").addEventListener("click", function () {
    var result = document.querySelector("#result8");
    var mess = ``;
    var players = [
        [],
        [],
        [],
        []
    ];
    var cards = [
        "4K",
        "KH",
        "5C",
        "KA",
        "QH",
        "KD",
        "2H",
        "10S",
        "AS",
        "7H",
        "9K",
        "10D",
    ];
    for (let index = 0; index < players.length; index++) {
        for (let index2 = index; index2 < cards.length; index2++) {
            players[index].push(cards[index2]);
            index2 += 3;
        }
        mess += `<p>Player ${index + 1}: [${players[index][0]}][${players[index][1]
            }][${players[index][2]}]</p>`;
    }
    result.innerHTML = mess;
});

document.querySelector("#calcBtn").addEventListener("click", function () {
    var result = document.querySelector("#result9");
    var total = document.getElementById("total").value;
    var leg = document.getElementById("leg").value;
    var dog = leg / 2 - total;
    var chicken = (4 * total - leg) / 2;
    result.innerHTML = `<p>Dog: ${dog}</p><p>Chicken: ${chicken} </p>`;
});

document.querySelector("#calcTimeBtn").addEventListener("click", function () {
    var result = document.querySelector("#result10");
    var hour = document.getElementById("hour").value;
    var minute = document.getElementById("minute").value;
    var degree = minute * 6 - 0.5 * (1 * hour + 10);
    result.innerHTML = `<p>góc lệch giữa kim giờ và kim phút: ${degree} độ</p>`;
});



document.querySelector('#clear').addEventListener('click', function () {
    location.reload();
})