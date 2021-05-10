document.querySelector('#btn-xacnhan').onclick = function(e) {
    e.prevenDefault;
    var mssv = document.querySelector('#txtMaSV');
    var tensv = document.querySelector('#txtTenSV');
    var loaisv = document.querySelector('#loaiSv');
    var toan = document.querySelector('#txtDiemToan');
    var ly = document.querySelector('#txtDiemLy');
    var hoa = document.querySelector('#txtDiemHoa');
    var renluyen = document.querySelector('#txtDiemRenLuyen');



    document.getElementById('txtTTTenSV').innerHTML = tensv.value;
    document.getElementById('txtTTMaSV').innerHTML = mssv.value;
    document.getElementById('txtTTLoaiSV').innerHTML = loaisv.value;
    document.getElementById('txtTTDiemTB').innerHTML = ((parseInt(toan.value) + parseInt(ly.value) + parseInt(hoa.value)) / 3).toFixed(2);
    document.getElementById('txtTTXepLoai').innerHTML = renluyen.value;

}