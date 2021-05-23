var hocVien = {
    HoTen: 'abc',
    Lop: 'fe64',
    hienThi: function() {
        console.log('Fullname: ', this.HoTen);
        console.log('Lop: ', this.Lop);
    }
}
hocVien.hienThi();


function getLink(width) {
    return `https://picsum.photos/${width}`;
}



// ham` co 1 tham so khong can dong ngoac
// ham co 1 tham so va return ko can dong ngoac va return

var getLink = width => `https://picsum.photos/${width}`;
var el = document.getElementById('image');
el.src = getLink(300);


// function a(a, b) {
//     console.log(a + b);
// }

function b(...restp) {
    console.log(restp[0] + restp[1] + restp[2]);
}
// a(1, 2);
b(1, 2, 3);

var student1 = { id: 1, name: 'nguyen van a' };
var student2 = {...student1, class: 'fe64', id: 4 }
console.log('student1', student1);
console.log('student2', student2);


let { ma, hienThi, ...rest } = hocVien;
console.log(rest);


var name1 = 'abc';
let sv = {
    name1,
    hienThi
}
console.log(sv);


objectA = {
    ['hoten']: 'nguyen van a',
}
console.log(objectA['hoten']);