function NhanVien() {
    this.id = "";
    this.name = "";
    this.baseSallary = "";
    this.workingHour = "";
    this.position = "";
    this.sallary = '';
    this.performance = '';
    this.sallaryCalc = function() {
        var tong = this.baseSallary * document.querySelector("#loaiNhanVien").value;
        return tong;
    };
    this.performanceCacl = function() {
        if (this.workingHour > 120) {
            return "Nhân Viên Xuất Sắc";
        } else if (this.workingHour > 100) {
            return "Nhân Viên Giỏi";
        } else if (this.workingHour > 80) {
            return "Nhân Viên Khá";
        } else if (this.workingHour > 50) {
            return "Nhân Viên TB";
        } else {
            return "Yếu";
        }
    };
}