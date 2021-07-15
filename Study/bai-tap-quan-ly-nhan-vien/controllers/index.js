var danhSachNhanVien = [];
var i;
var validator = new Validation();
document.getElementById("btnXacNhan").addEventListener("click", function () {
    var nhanvien = new NhanVien();
    nhanvien.id = document.getElementById("maNhanVien").value;
    nhanvien.name = document.getElementById("tenNhanVien").value;
    nhanvien.position = document.getElementById("loaiNhanVien").selectedOptions[0].innerHTML;
    nhanvien.baseSallary = document.getElementById("luongCoBan").value;
    nhanvien.workingHour = document.getElementById("gioLam").value;
    nhanvien.sallary = String(nhanvien.sallaryCalc());
    nhanvien.performance = nhanvien.performanceCacl();
    // danhSachNhanVien.push(JSON.stringify(nhanvien));
    var valid = true;

    document.querySelectorAll('.alert').forEach((item1, index1) => {
        for (const item2 in nhanvien) {
            if (typeof (nhanvien[item2]) === 'string' && Object.keys(nhanvien).indexOf(item2) == index1) {
                // valid &= validator.checkNull(nhanvien[item2], `#${item1.id}`);
                switch (item2) {
                    case 'id':
                        valid &= validator.checkId(nhanvien[item2], `#${item1.id}`);
                        break;
                    case 'name':
                        valid &= validator.checkName(nhanvien[item2], `#${item1.id}`);
                        break;
                    case 'baseSallary':
                        valid &= validator.checkBaseSallary(nhanvien[item2], `#${item1.id}`);
                        break;
                    case 'workingHour':
                        valid &= validator.checkWorkingHour(nhanvien[item2], `#${item1.id}`);
                        break;
                    default:
                        break;
                }
            }
        }
    })
    
    // {
    //     valid &= validator.checkNull(nhanvien.id, '#unvalid_id', 'Mã nhân viên ')
    //         & validator.checkNull(nhanvien.name, '#unvalid_name', 'Tên nhân viên ')
    //         & validator.checkNull(nhanvien.baseSallary, '#unvalid_baseSallary', 'Lương cơ bản ')
    //         & validator.checkNull(nhanvien.workingHour, '#unvalid_workingHour', 'Giờ làm trong tháng ');
    // }

    if (!valid) {
        return;
    }
    danhSachNhanVien.push(nhanvien);
    renderTable();
    luuStorage();
});
document.getElementById('btnLuu').onclick = function () {
    var nhanvien = new NhanVien();
    nhanvien.id = document.getElementById("maNhanVien").value;
    nhanvien.name = document.getElementById("tenNhanVien").value;
    nhanvien.position = document.getElementById("loaiNhanVien").selectedOptions[0].innerHTML;
    nhanvien.baseSallary = document.getElementById("luongCoBan").value;
    nhanvien.workingHour = document.getElementById("gioLam").value;
    nhanvien.sallary = String(nhanvien.sallaryCalc());
    nhanvien.performance = nhanvien.performanceCacl();
    var valid = true;

    document.querySelectorAll('.alert').forEach((item1, index1) => {
        for (const item2 in nhanvien) {
            if (typeof (nhanvien[item2]) === 'string' && Object.keys(nhanvien).indexOf(item2) == index1) {
                // valid &= validator.checkNull(nhanvien[item2], `#${item1.id}`);
                switch (item2) {
                    case 'id':
                        valid &= validator.checkId(nhanvien[item2], `#${item1.id}`);
                        break;
                    case 'name':
                        valid &= validator.checkName(nhanvien[item2], `#${item1.id}`);
                        break;
                    case 'baseSallary':
                        valid &= validator.checkBaseSallary(nhanvien[item2], `#${item1.id}`);
                        break;
                    case 'workingHour':
                        valid &= validator.checkWorkingHour(nhanvien[item2], `#${item1.id}`);
                        break;
                    default:
                        break;
                }
            }
        }
    })
    if (!valid) {
        return;
    }
    danhSachNhanVien[i] = nhanvien;
    luuStorage();
    renderTable();
    document.getElementById('btnLuu').setAttribute('disabled', '');
    document.getElementById('btnXacNhan').removeAttribute('disabled');

}
function renderTable() {
    var contentTable = "";
    danhSachNhanVien.forEach((nhanvien, index) => {
        contentTable += `
            <tr>
                <td>${nhanvien.id}</td>
                <td>${nhanvien.name}</td>
                <td>${nhanvien.position}</td>
                <td>${nhanvien.baseSallary}</td>
                <td>${nhanvien.sallary}</td>
                <td>${nhanvien.workingHour}</td>
                <td>${nhanvien.performance}</td>
                <td><button class="btn btn-danger" onclick="delRow(${index})">Xóa</button></td>
                <td><button class="btn btn-primary" onclick="modify(${index})">Sửa</button></td>
            </tr>
    `;
    });
    document.querySelector('#tblNhanVien').innerHTML = contentTable;
}
function delRow(index) {
    danhSachNhanVien.pop(index);
    luuStorage();
    renderTable();
}
function modify(index) {
    i = index;
    document.getElementById("maNhanVien").value = danhSachNhanVien[index].id;
    document.getElementById("tenNhanVien").value = danhSachNhanVien[index].name;
    document.getElementById("loaiNhanVien").selectedOptions[0].innerHTML = danhSachNhanVien[index].position;
    document.getElementById("luongCoBan").value = danhSachNhanVien[index].baseSallary;
    document.getElementById("gioLam").value = danhSachNhanVien[index].workingHour;
    document.getElementById('btnXacNhan').setAttribute('disabled', '');
    document.getElementById('btnLuu').removeAttribute('disabled');
}

function luuStorage() {
    localStorage.setItem('danhSachNhanVien', JSON.stringify(danhSachNhanVien));
}
function layStorage() {
    if (localStorage.getItem('danhSachNhanVien')) {
        danhSachNhanVien = JSON.parse(localStorage.getItem('danhSachNhanVien'));
        renderTable();
    }

}
layStorage();
// function renderTable() {
    // while (document.getElementById('tblNhanVien').hasChildNodes()) {
    //     let i = 0;
    //     document.getElementById('tblNhanVien').removeChild(document.getElementById('tblNhanVien').childNodes[i]);
    //     i++;
    // }
//     danhSachNhanVien.forEach((employer, index) => {
//         employer = JSON.parse(employer);

//         var __id = document.createElement('td');
//         var __name = document.createElement('td');
//         var __position = document.createElement('td');
//         var __baseSallary = document.createElement('td');
//         var __sallary = document.createElement('td');
//         var __workingHour = document.createElement('td');
//         var __performance = document.createElement('td');
//         var __button = document.createElement('td')
//         var _tr = document.createElement('tr');

//         __id.innerHTML = employer.id;
//         __name.innerHTML = employer.name;
//         __position.innerHTML = employer.position;
//         __baseSallary.innerHTML = employer.baseSallary;
//         __sallary.innerHTML = employer.sallary;
//         __workingHour.innerHTML = employer.workingHour;
//         __performance.innerHTML = employer.performance;
//         __button.innerHTML = '<button class="btn btn-danger btn-del" onclick="delRow(' + index + ')"> Xóa </button>';
//         _tr.appendChild(__id);
//         _tr.appendChild(__name);
//         _tr.appendChild(__position);
//         _tr.appendChild(__baseSallary);
//         _tr.appendChild(__sallary);
//         _tr.appendChild(__workingHour);
//         _tr.appendChild(__performance);
//         _tr.appendChild(__button);
//         document.querySelector("#tblNhanVien").appendChild(_tr);
//     });
// }

// function delRow(index) {
//     danhSachNhanVien.pop(index)
//     renderTable();
// }

