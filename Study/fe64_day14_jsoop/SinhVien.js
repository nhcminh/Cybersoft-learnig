function sinhVien() {
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.emailSinhVien = '';
    this.sdtSinhVien = '';
    this.loaiSinhVien = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen = '';
    this.tinhDiemTrungBinh = function() {
        //Truy xuất thuộc tính trong phương thức 
        var diemTrungBinh = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return diemTrungBinh;
    };
    this.xepLoaiSinhVien = function() {
        var ketQua = '';
        var diemTB = this.tinhDiemTrungBinh();
        if (Number(this.diemRenLuyen) < 5) {
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
}