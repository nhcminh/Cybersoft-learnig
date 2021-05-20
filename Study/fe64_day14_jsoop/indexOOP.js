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
document.querySelector("#btnXacNhan").onclick = function () {
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
    var maSV = document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.maSinhVien;
    document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.tenSinhVien;
    document.querySelector("#txtEmailSinhVien").innerHTML = sinhVien.tenSinhVien;
    document.querySelector("#txtSdtSinhVien").innerHTML = sinhVien.tenSinhVien;
    document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
    document.querySelector("#txtDiemTrungBinh").innerHTML = sinhVien.tinhDiemTrungBinh();
    document.querySelector("#txtXepLoai").innerHTML = sinhVien.xepLoaiSinhVien();
    sinhVien.diemTB = sinhVien.tinhDiemTrungBinh();
    sinhVien.xepLoai = sinhVien.xepLoaiSinhVien();
    danhsach.students.push(JSON.stringify(sinhVien));
    while (document.getElementById('tblSinhVien').hasChildNodes()) {
        let i = 0;
        document.getElementById('tblSinhVien').removeChild(document.getElementById('tblSinhVien').childNodes[i]);
        i++;
    }
    danhsach.students.forEach((student, index) => {
        student = JSON.parse(student);
        var __id = document.createElement('td');
        var __name = document.createElement('td');
        var __grade = document.createElement('td');
        var __class = document.createElement('td');
        var __type = document.createElement('td');
        var _tr = document.createElement('tr');
        __id.innerHTML = student.maSinhVien;
        __name.innerHTML = student.tenSinhVien;
        __grade.innerHTML = student.diemTB;
        __class.innerHTML = student.xepLoai;
        __type.innerHTML = student.loaiSinhVien;
        _tr.appendChild(__id);
        _tr.appendChild(__name);
        _tr.appendChild(__type);
        _tr.appendChild(__grade);
        _tr.appendChild(__class);
        document.querySelector("#tblSinhVien").appendChild(_tr);
        console.log(index)
    });


};