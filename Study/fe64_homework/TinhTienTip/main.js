var _message="";
var _toTal = document.getElementById('txtTongTien');
var _tip = document.getElementById('slPhanTramTip');
var _shareNumber = document.getElementById('txtSoNguoi');
var _btn = document.getElementById('btnTinhTienTip');
var _amountTip = document.getElementById('txtThongBaoTienTip');

_btn.addEventListener('click', function () {
    message();
    _amountTip.innerHTML = _message;
    _amountTip.style.display = "block";
    _message = "";
})
function message(){
    if (_toTal.value == "") {
        _message = _message + "<p>Nhập tổng tiền kìa!</p>"
    }
    if (_tip.value == 0) {
        _message = _message + "<p>Chọn tip bao nhiêu????</p>";
    }
    if (_shareNumber.value == "") {
        _message = _message + "<p>Share mấy đứa dị má????</p>"
    }
    if (_toTal.value != "" && _tip.value != "0" && _shareNumber.value != "") {
        _message = "Số tiền tip: " + _cacl() + "VND";
    }
}
function _cacl() {
    return _toTal.value * (_tip.value / 100) / _shareNumber.value;
}