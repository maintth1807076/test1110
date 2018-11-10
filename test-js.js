var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function(){
    var txtname = document.forms["register-form"]["name"];
    var msgname = txtname.nextElementSibling;
    if (txtname == null || txtname.value.length == 0){
        msgname.innerHTML = "* Vui lòng nhập tên";
        msgname.classList.remove("hidden-text");
        msgname.classList.add("danger-text");
    } else if (txtname.value.length > 50){
        msgname.innerHTML = "* Tên quá dài";
        msgname.classList.remove("hidden-text");
        msgname.classList.add("danger-text");
    } else {
        msgname.innerHTML = "* Tên hợp lệ";
        msgname.classList.remove("hidden-text");
        msgname.classList.remove("danger-text");
        msgname.classList.add("success-text");
    }
    // email
    var txtemail = document.forms["register-form"]["email"];
    var msgemail = txtemail.nextElementSibling;
    var valuetxtemail = txtemail.value;
    if ( txtemail == null || txtemail.value.length == 0){
        msgemail.innerHTML = "* Vui lòng nhập email";
        msgemail.classList.remove("hidden-text");
        msgemail.classList.add("danger-text");
    } else {
        if (valuetxtemail.search('@') == -1){
            msgemail.innerHTML = "* Email không hợp lệ";
            msgemail.classList.remove("hidden-text");
            msgemail.classList.add("danger-text");
        } else {
            msgemail.innerHTML = "* Email hợp lệ";
            msgemail.classList.remove("hidden-text");
            msgemail.classList.remove("danger-text");
            msgemail.classList.add("success-text");
        }
    }
    var txtphone = document.forms["register-form"]["phone"];
    var msgphone = txtphone.nextElementSibling;
    if (txtphone == null || txtphone.value.length == 0){
        msgphone.innerHTML = "* Vui lòng nhập số điện thoại";
        msgphone.classList.remove("hidden-text");
        msgphone.classList.add("danger-text");
    } else {
        msgphone.innerHTML = "* Số điện thoại hợp lệ";
        msgphone.classList.remove("hidden-text");
        msgphone.classList.remove("danger-text");
        msgphone.classList.add("success-text");
    }
    // var txtgender = document.forms["register-form"]["gender"];
    // var msggender = txtgender.nextElementSibling;
    //
    // for (var i = 0; i < txtgender.length; i++){
    //     if ( !txtgender[i].checked === true){
    //         msggender.innerHTML = "* Vui lòng chọn giới tính";
    //     msggender.classList.remove("hidden-text");
    //     msggender.classList.add("success-text");
    //     } else {
    //         msggender.classList.remove("hidden-text");
    //         msggender.classList.remove("danger-text");
    //         msggender.classList.add("success-text");
    //     }
    }
}
// var main = document.getElementById('main');
// btnSubmit. = function () {
//     main.innerHTML =  ' <ul>\n' +
//         '            <li>Họ và tên</li>\n' +
//         '            <li>Email</li>\n' +
//         '            <li>Phone</li>\n' +
//         '        </ul>'
// }