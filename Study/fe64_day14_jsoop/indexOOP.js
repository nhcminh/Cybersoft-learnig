// var name_hotel = 'Cybersoft';
// var name_car = 'honda';

// var car = {
//     id:'HONDA001',
//     name: 'honda',
//     price: 10000,
//     showInfo: function () {
//         console.log('id',car.id);
//         console.log('name',car.name);
//         console.log('price',car.price);
//     }
// };
// var hotel = {
//     id: 1,
//     name: 'cybersoft',
//     showInfo: () => {
//         console.log('id',hotel.id);
//         console.log('name',hotel.name);
//     }
// }
// //Truy xuất biến trong đối tượng (biến trong đối tượng => thuộc tính)
// //Cách 1: [ten_doi_tuong].[ten_thuoc_Tinh]
// console.log('car.name',car.name );
// //Cách 2: [ten_doi_tuong]['ten_thuoc_tinh']
// console.log("car['name']",car['name']);
// //Truy xuất hàm trong đối tượng (hàm trong đối tượng => phương thức)
// //Cách 1:
// car.showInfo();
// hotel.showInfo();
// //Cách 2
// car['showInfo']();
// hotel['showInfo']();
// //=> Lập trình hướng đối tượng (OOP) => giúp đưa biến và hàm về đúng vị trí và ý nghĩa của nó. Đối tượng là nhóm các biến thông tin.

var sinhVien = new sinhVien();
var danhsach = new danhSach();
var _td = function() { var td = document.createElement("td"); return td; }
var _tr = function() { var tr = document.createElement("tr"); return tr; }
document.querySelector("#btnXacNhan").onclick = function() {
    sinhVien.maSinhVien = document.querySelector("#maSinhVien").value;
    sinhVien.tenSinhVien = document.querySelector("#tenSinhVien").value;
    sinhVien.emailSinhVien = document.querySelector("#emailSinhVien").value;
    sinhVien.sdtSinhVien = document.querySelector("#sdtSinhVien").value;
    sinhVien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;
    sinhVien.diemToan = document.querySelector("#diemToan").value;
    sinhVien.diemLy = document.querySelector("#diemLy").value;
    sinhVien.diemHoa = document.querySelector("#diemHoa").value;
    sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
    //Xử lý hiển thị
    document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.maSinhVien;
    document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.tenSinhVien;
    document.querySelector("#txtEmailSinhVien").innerHTML = sinhVien.tenSinhVien;
    document.querySelector("#txtSdtSinhVien").innerHTML = sinhVien.tenSinhVien;
    document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
    document.querySelector(
        "#txtDiemTrungBinh"
    ).innerHTML = sinhVien.tinhDiemTrungBinh();
    document.querySelector("#txtXepLoai").innerHTML = sinhVien.xepLoaiSinhVien();
    danhsach.students.push(sinhVien);
    // _td = document.createElement("td");
    // _tr = document.createElement("tr");
    document.querySelector("#tblSinhVien").innerHTML = "";
    // for (let i = 0; i < danhsach.students.length; i++) {
    _td().innerHTML = _td().innerHTML + danhsach.students[0].maSinhVien;
    _tr().appendChild(_td());
    // document.querySelector("#tblSinhVien").appendChild(_tr);
    _td().innerHTML = _td().innerHTML + danhsach.students[0].tenSinhVien;
    _tr().appendChild(_td());
    _td().innerHTML = _td().innerHTML + danhsach.students[0].loaiSinhVien;
    _tr().appendChild(_td());
    _td().innerHTML = _td().innerHTML + danhsach.students[0].tinhDiemTrungBinh();
    _tr().appendChild(_td());
    _td().innerHTML = _td().innerHTML + danhsach.students[0].xepLoaiSinhVien();
    _tr().appendChild(_td());
    document.querySelector("#tblSinhVien").appendChild(_tr());
    // }
    //   _tr.appendChild(_td);
    // var danhsach = new danhSach();
    // danhsach.students.forEach(
    //     (student) =>
    //     function() {
    //         if (student != undefined) {
    //             _td.innerHTML = student.maSinhVien;
    //             console(student.maSinhVien);
    // _tr.appendChild(_td);
    // _td.innerHTML = student.tenSinhVien;
    // _tr.appendChild(_td);
    // _td.innerHTML = student.loaiSinhVien;
    // _tr.appendChild(_td);
    // _td.innerHTML = student.tinhDiemTrungBinh();
    // _tr.appendChild(_td);
    // _td.innerHTML = student.xepLoaiSinhVien();
    // _tr.appendChild(_td);
    //             document.querySelector("#tblSinhVien").appendChild(_tr);
    //         }
    //     }
    // );
};