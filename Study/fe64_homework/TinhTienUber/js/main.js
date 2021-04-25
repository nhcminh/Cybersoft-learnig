var _message = "";
var _carType;
var _isValid;
var _carTypeArr = document.getElementsByName("selector");
var _distannce = document.getElementById("distance");
var _time = document.getElementById("time");
var _btnCash = document.getElementById("btn-cash");
var _btnBill = document.getElementById("btn-bill");
var _bill = document.getElementById("divThanhTien");


_btnCash.addEventListener("click", function () {
    _printCash();
    _bill.style.display = "block";
});

_btnBill.addEventListener("click", function () {
    _printBill();
    _bill.style.display = "block";
});

function _getCarType() {
    for (i = 0; i < _carTypeArr.length; i++) {
        if (_carTypeArr[i].checked) {
            _carType = _carTypeArr[i].value;
            break;
        } else {
            _carType = "false";
        }
    }
}
function _checkValid() {
    _errorMessage();
    if (_carType != "false" && _distannce.value != "" && _time.value != "") {
        _isValid = true;
    } else _isValid = false;
}
function _errorMessage() {
    if (_carType == "false") {
        _message = _message + "<p> Vui Lòng Chọn Loại Xe!</p>";
    }
    if (_distannce.value == "") {
        _message = _message + "<p> Vui Lòng Nhập Quảng Đường!</p>";
    }
    if (_time.value == "") {
        _message = _message + "<p> Vui Lòng Chọn Thời Gian Chờ!</p>"
    }
}
function _uberXCash() {

    if (_distannce.value <= 1) {
        return 8000 + (_time.value * 2000);
    } else if (_distannce.value > 1 && _distannce.value <= 20) {
        return 8000 + ((_distannce.value - 1) * 12000) + (_time.value * 2000);
    } else {
        return 8000 + (19 * 12000) + (_distannce.value * 10000) + (_time.value * 2000);
    }
}
function _uberSUVCash() {

    if (_distannce.value <= 1) {
        return 9000 + (_time.value * 3000);
    } else if (_distannce.value > 1 && _distannce.value <= 20) {
        return 9000 + ((_distannce.value - 1) * 14000) + (_time.value * 3000);
    } else {
        return 9000 + (19 * 14000) + (_distannce.value * 12000) + (_time.value * 3000);
    }
}
function _uberBlackCash() {

    if (_distannce.value <= 1) {
        return 10000 + (_time.value * 4000);
    } else if (_distannce.value > 1 && _distannce.value <= 20) {
        return 10000 + ((_distannce.value - 1) * 16000) + (_time.value * 4000);
    } else {
        return 10000 + (19 * 16000) + (_distannce.value * 14000) + (_time.value * 4000);
    }
}
function _printCash() {
    _getCarType();
    _checkValid();
    switch (_carType + _isValid) {
        case "uberXtrue": {
            _message =
                "<h2>Thành Tiền: <span id='xuatTien' class='xuatTien'>" + _uberXCash() + "</span></h2>";
            break;
        }
        case "uberSUVtrue": {
            _message =
                "<h2>Thành Tiền: <span id='xuatTien' class='xuatTien'>" + _uberSUVCash() + "</span></h2>";
            break;
        }
        case "uberBlacktrue": {
            _message =
                "<h2>Thành Tiền: <span id='xuatTien' class='xuatTien'>" + _uberBlackCash() + "</span></h2>";
            break;
        }
        default:
            _printMessage();
    }
    _printMessage();
    _message = "";
}
function _printBill() {
    _getCarType();
    _checkValid();
    switch (_carType + _isValid) {
        case "uberXtrue":
            {
                _message =
                    "<p> Loại xe: <b>" +
                    _carType +
                    "</b>" +
                    " <br>Quãng đường: <b>" +
                    _distannce.value +
                    "KM</b> <br>Thời gian chờ: <b>" +
                    _time.value +
                    "phút.</b> </p> <h2>Thành Tiền: <span id='xuatTien' class='xuatTien'>" +
                    _uberXCash() +
                    "</span></h2>";
                break;
            }
        case "uberSUVtrue":
            {
                _message =
                    "<p> Loại xe: <b>" +
                    _carType +
                    "</b> <br>Quãng đường: <b>" +
                    _distannce.value +
                    "KM</b> <br>Thời gian chờ: <b>" +
                    _time.value +
                    "</b> phút. <h2>Thành Tiền: <span id='xuatTien' class='xuatTien'>" +
                    _uberSUVCash() +
                    "</span></h2>";
                break;
            }
        case "uberBlacktrue":
            {
                _message =
                    "<p> Loại xe: <b>" +
                    _carType +
                    "</b>" +
                    " <br>Quãng đường: <b>" +
                    _distannce.value +
                    "KM</b> <br>Thời gian chờ: <b>" +
                    _time.value +
                    "phút.</b> </p> <h2>Thành Tiền: <span id='xuatTien' class='xuatTien'>" +
                    _uberBlackCash() +
                    "</span></h2>";
                break;
            }
        default:
            _printMessage();
    }
    _printMessage();
    _message = "";
}
function _printMessage() {
    _bill.innerHTML = _message;
}
