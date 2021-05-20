function Validation() {
    // this.checkNull = function (value, selector) {
    //     var condition = false;
    //     if (value.trim() !== '') {
    //         condition = true;
    //     }
    //     return message(selector,condition, 'Trường này không được bỏ trống !');
    // }
    this.checkId = function (value, selector) {
        var condition = false;
        var regex = /^[0-9]+$/;
        if (value.trim() === '') {
            return message(selector, condition, 'Trường này không được bỏ trống !');
        }
        if (value.match(regex) && value.length === 6) {
            condition = true;
        }
        return message(selector, condition, 'ID nhập vào chưa đúng !')
    }
    this.checkName = function (value, selector) {
        var regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
        var condition = false;
        if (value.trim() === '') {
            return message(selector, condition, 'Trường này không được bỏ trống !');
        }
        if (value.match(regex)) {
            condition = true;
        }
        return message(selector, condition, 'Tên không hợp lệ')
    }
    this.checkBaseSallary = function (value, selector) {
        var regex = /^[0-9]*$/;
        var condition = false;
        if (value.trim() === '') {
            return message(selector, condition, 'Trường này không được bỏ trống !');
        }
  
        if (value.match(regex)) {
            condition = true;
        }
        return message(selector, condition, 'Lương cơ bản không hợp lệ');
    }
    this.checkWorkingHour = function (value, selector) {
        var regex = /^[0-9]*$/;
        var condition = false;
        if (value.trim() === '') {
            return message(selector, condition, 'Trường này không được bỏ trống !');
        }
        if (value.match(regex)) {
            condition = true;
        }
        return message(selector, condition, 'Số giờ làm không hợp lệ');
    }



    function message(selector, condition, message) {
        if (condition) {
            document.querySelector(selector).classList.remove('d-block');
            document.querySelector(selector).classList.add('d-none');
            return true;
        }
        document.querySelector(selector).classList.remove('d-none');
        document.querySelector(selector).classList.add('d-block');
        document.querySelector(selector).innerHTML = message;
        return false;
    }
}
