var sinhvien = {
    mssv: String,
    ten: String,
    loai: String,
    dToan: String,
    dLy: String,
    dHoa: String,
    diemTB: () => {
        return (Number(dToan) + Number(dLy) + Number(dHoa)) / 3;
    },
    xeploai: () => {
        var xeploai;
        (diemTB() > 8) ? xeploai = "Gioi": xeploai = "yeu";
        return xeploai;
    }
}


$('#btn-xacnhan').on('click', function() {
    sinhvien.mssv = $('#txtMaSV').val();
    sinhvien.ten = $('#txtTenSV').val();
    sinhvien.loai = $('#loaiSv').val();
    sinhvien.dToan = $('#txtDiemToan').val();
    sinhvien.dLy = $('#txtDiemLy').val();
    sinhvien.dHoa = $('#txtDiemHoa').val();
    console.log(sinhvien)

})