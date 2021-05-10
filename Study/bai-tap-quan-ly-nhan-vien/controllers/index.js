var nhanvien = new NhanVien();

document.getElementById("btnXacNhan").addEventListener("click", function() {
    nhanvien.id = document.getElementById("maNhanVien").value;
    nhanvien.name = document.getElementById("tenNhanVien").value;
    nhanvien.position = document.getElementById("loaiNhanVien").selectedOptions[0].outerText;
    nhanvien.baseSallary = document.getElementById("luongCoBan").value;
    nhanvien.workingHour = document.getElementById("gioLam").value;
    console.log(nhanvien);
    document.getElementById("txtMaNhanVien").innerHTML = nhanvien.id;
    document.getElementById("txtTenNhanVien").innerHTML = nhanvien.name;
    document.getElementById("txtChucVu").innerHTML = nhanvien.position;
    document.getElementById("txtTongLuong").innerHTML = nhanvien.sallary();
    document.querySelector('#txtLoainhanVien').innerHTML = nhanvien.performance();
});