var danhSachNhanVien = [];
var i = -1;
var valid = true;
var validator = new Validation();
var ev
document.querySelector('#btnXacNhan').onclick = (e) => {
    ev = e;
    addNew();
    render();
    setStorage();
}
document.querySelector('#btnLuu').onclick = (e) => {
    addNew();
    render();
    setStorage();
    document.getElementById('btnLuu').setAttribute('disabled', '');
    document.getElementById('btnXacNhan').removeAttribute('disabled');
}
addNew = () => {
    let inputArr = document.querySelectorAll('form input');
    let nhanVien = { ...NhanVien };
    for (let tagInput of inputArr) {
        let { name, value } = tagInput;
        nhanVien = { ...nhanVien, [name]: value }
    }
    nhanVien = { ...nhanVien, ['position']: document.getElementById("loaiNhanVien").selectedOptions[0].innerHTML, ['sallary']: nhanVien.sallaryCalc(nhanVien.baseSallary), ['performance']: nhanVien.performanceCacl(nhanVien.workingHour) };
    checkValid(nhanVien);
    if (!valid) {
        return;
    }
    if (i == -1) danhSachNhanVien.push(nhanVien);
    else danhSachNhanVien[i] = nhanVien;
    i = -1;
}
render = () => {
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
delRow = (index) => {
    danhSachNhanVien.pop(index);
    setStorage();
    render();
}
modify = (index) => {
    i = index;
    let nhanVien = danhSachNhanVien[index];
    let inputArr = document.querySelectorAll('form input');
    for (const tagInput of inputArr) {
        let { name, value } = tagInput;
        if (name == 'id') tagInput.value = nhanVien.id;
        if (name == 'name') tagInput.value = nhanVien.name;
        if (name == 'baseSallary') tagInput.value = nhanVien.baseSallary;
        if (name == 'workingHour') tagInput.value = nhanVien.workingHour;
    }
    document.getElementById('btnXacNhan').setAttribute('disabled', '');
    document.getElementById('btnLuu').removeAttribute('disabled');
}
setStorage = () => localStorage.setItem('danhSachNhanVien', JSON.stringify(danhSachNhanVien));
getStorage = () => {
    if (localStorage.getItem('danhSachNhanVien')) {
        danhSachNhanVien = JSON.parse(localStorage.getItem('danhSachNhanVien'));
        render();
    }
}
getStorage();

checkValid = (nhanvien) => {
    console.log(nhanvien.baseSallary)
    var alertArr = document.querySelectorAll('.alert');
    for (const tagMess of alertArr) {
        let { id } = tagMess;
        switch (id) {
            case 'unvalid_id':
                valid &= validator.checkId(nhanvien.id, `#${id}`);
                break;
            case 'unvalid_name':
                valid &= validator.checkName(nhanvien.name, `#${id}`);
                break;
            case 'unvalid_baseSallary':
                valid &= validator.checkBaseSallary(nhanvien.baseSallary, `#${id}`);
                break;
            case 'unvalid_workingHour':
                valid &= validator.checkWorkingHour(nhanvien.workingHour, `#${id}`);
                break;
            default:
                break;
        }
    }
}