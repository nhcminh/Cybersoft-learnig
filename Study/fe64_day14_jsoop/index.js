//Bước 1: Định nghĩa sự kiện click cho button xác nhận

document.querySelector('#btnXacNhan').onclick = function () {
    //Bước 2: Lấy thông tin người dùng nhập từ giao diện
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    // console.log('maSinhVien',maSinhVien);    
    // console.log('tenSinhVien',tenSinhVien);    
    // console.log('loaiSinhVien',loaiSinhVien);    
    //Bước 3: Hiển thị thông tin trên các thẻ <span txt></span>
    document.querySelector('#txtMaSinhVien').innerHTML = maSinhVien;
    document.querySelector('#txtTenSinhVien').innerHTML = tenSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML = loaiSinhVien;
    var diemTB = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    var xepLoaiSV = xepLoaiSinhVien(diemTB, diemRenLuyen);
    document.querySelector('#txtDiemTrungBinh').innerHTML = diemTB.toFixed(2); //toFixed dành cho các biến kiểu number
    document.querySelector('#txtXepLoai').innerHTML = xepLoaiSV;
}
function tinhDiemTrungBinh(dToan, dLy, dHoa) { //dToan,dLy,dHoa tham số
    var diemTrungBinh = (Number(dToan) + Number(dLy) + Number(dHoa)) / 3;
    return diemTrungBinh; //Cần lấy giá trị nào trong hàm ra ngoài xử lý thì return giá trị đó
}
function xepLoaiSinhVien(diemTB, diemRL) {
    var ketQua = '';
    if (diemRL < 5) {
        ketQua = 'Yếu';
    } else {
        if (diemTB < 5) {
            ketQua = 'Yếu';
        } else if (diemTB >= 5 && diemTB < 6.5) {
            ketQua = 'Trung bình ';
        } else if (diemTB >= 6.5 && diemTB < 7) {
            ketQua = 'Trung bình khá';
        } else if (diemTB >= 7 && diemTB < 8) {
            ketQua = 'Khá';
        } else if (diemTB >= 8 && diemTB < 9) {
            ketQua = 'Giỏi';
        } else if (diemTB >= 9 && diemTB <= 10) {
            ketQua = 'Xuất sắc';
        } else {
            ketQua = 'Không hợp lệ';
        }
    }
    return ketQua;

}