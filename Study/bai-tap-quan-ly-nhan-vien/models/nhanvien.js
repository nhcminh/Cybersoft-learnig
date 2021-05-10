function NhanVien() {
    this.id = "";
    this.name = "";
    this.position = "";
    this.baseSallary = "";
    this.workingHour = "";
    this.sallary = function() {
        var tong = this.baseSallary * document.querySelector("#loaiNhanVien").value;
        return tong;
    };
    this.performance = function() {
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