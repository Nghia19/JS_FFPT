let getMSSV = document.getElementById("mssv");
let getName = document.getElementById("name");
let getEmail = document.getElementById("email");
<<<<<<< HEAD
=======
let getPass = document.getElementById("pass");
let getConfirmPass = document.getElementById("confirm_pass");
>>>>>>> fa02e2fe9fe4ab158e47468df9d75dc1112222d2
let Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let getDay = document.getElementById("day");
let getMonth = document.getElementById("month");
let getYear = document.getElementById("year");
let getGender = document.getElementsByName("gender");
let getSoThich = document.getElementsByName("so_thich");
let getSoThichKhac = document.getElementById("so_thich_khac");
let getQuocTich = document.getElementById("quoc_tich");
let getContent = document.getElementById("content");
let getDangKy = document.getElementById("dang_ky");
<<<<<<< HEAD
=======

>>>>>>> fa02e2fe9fe4ab158e47468df9d75dc1112222d2
function addStyleError(element) {
  let formGroup = element.closest(".form-group");
  formGroup.classList.add("error");
}
function removeStyleError(element, type) {
  let formGroup;
  let event;
  if (type == "array") {
    formGroup = element[0].closest(".form-group");
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener("click", function () {
        formGroup.classList.remove("error");
      });
    }
  } else {
    formGroup = element.closest(".form-group");
    element.addEventListener("click", function () {
      formGroup.classList.remove("error");
    });
  }
}
let now = new Date();
function setDate(min, max) {
  let str = "<option value='' disabled selected></option>";
  for (let i = min; i < max + 1; i++) {
    str += "<option value='" + i + "'>" + i + "</option>";
  }
  return str;
}
getDay.innerHTML = setDate(1, 31);
getMonth.innerHTML = setDate(1, 12);
getYear.innerHTML = setDate(1920, now.getFullYear());
function checkLeapYear(year) {
  return new Date(year, 1, 29).getDate() === 29;
}
function changeYear() {
  if (checkLeapYear(getYear.value)) {
    Days[1] = 29;
  } else {
    Days[1] = 28;
  }
  if (getMonth.value == 2) {
    let day = getDay.value;
    getDay.innerHTML = setDate(1, Days[1]);
    if (day < Days[getMonth.value - 1]) getDay.value = 1;
    getDay.value = day <= Days[getMonth.value - 1] ? day : 1;
  }
}
getYear.addEventListener("change", changeYear);
function changeMonth() {
  let day = getDay.value;
  getDay.innerHTML = setDate(1, Days[getMonth.value - 1]);
  getDay.value = day <= Days[getMonth.value - 1] ? day : 1;
}
getMonth.addEventListener("change", changeMonth);
function checkEmail() {
  var regx = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
  return getEmail.value.match(regx) ? true : false;
}
<<<<<<< HEAD
=======
for (let index = 65; index < 91; index++) {
  console.log(String.fromCharCode(index));
  console.log(String.fromCharCode(index).toLowerCase());
}
>>>>>>> fa02e2fe9fe4ab158e47468df9d75dc1112222d2
function checkGender() {
  for (let i = 0; i < getGender.length; i++) {
    if (getGender[i].checked) {
      return getGender[i].value;
    }
  }
  return false;
}
for (let i = 0; i < getSoThich.length - 1; i++) {
  getSoThich[i].addEventListener("click", function () {
    getSoThichKhac.style.display = getSoThich[getSoThich.length - 2].checked
      ? "block"
      : "none";
  });
}
function checkSoThich() {
  let flag = false;
  let cc = "";
  for (let i = 0; i < getSoThich.length - 2; i++) {
    if (getSoThich[i].checked) {
      cc += !flag ? getSoThich[i].value : ", " + getSoThich[i].value;
      flag = true;
    }
  }
  if (getSoThich[getSoThich.length - 2].checked) {
    flag = true;
    cc += ", " + getSoThich[getSoThich.length - 1].value;
  }
  if (
    getSoThich[getSoThich.length - 2].checked &&
    getSoThich[getSoThich.length - 1].value == ""
  ) {
    flag = false;
    addStyleError(getSoThich[getSoThich.length - 1]);
    removeStyleError(getSoThich[getSoThich.length - 1]);
  }
  if (flag) {
    removeStyleError(getSoThich[0]);
    return cc;
  } else {
    addStyleError(getSoThich[0]);
    return flag;
  }
}
<<<<<<< HEAD
=======

function checkPass() {
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  let specialChar = /[!@#$%^&*]/g;
  if (
    getPass.value.substring(0, 1).match(upperCaseLetters) &&
    getPass.value.match(lowerCaseLetters) &&
    getPass.value.match(numbers) &&
    getPass.value.match(specialChar) &&
    getPass.value.length >= 8
  ) {
    return true;
  }
  return false;
}
>>>>>>> fa02e2fe9fe4ab158e47468df9d75dc1112222d2
getDangKy.addEventListener("click", function (e) {
  e.preventDefault();
  let check = true;
  let textError = "",
    textCorrect = "";
  if (getMSSV.value == "") {
    textError += "Vui l??ng nh???p m?? s??? sinh vi??n! \n";
    addStyleError(getMSSV);
    removeStyleError(getMSSV);
    check = false;
  } else {
    textCorrect += "MSVS: " + getMSSV.value + "\n";
  }
  if (getName.value == "") {
    textError += "Vui l??ng nh???p t??n!\n";
    addStyleError(getName);
    removeStyleError(getName);
    check = false;
  } else {
    textCorrect += "H??? t??n: " + getName.value + "\n";
  }
  if (getEmail.value == "") {
    textError += "Vui l??ng nh???p Email!\n";
    addStyleError(getEmail);
    removeStyleError(getEmail);
    check = false;
  } else if (!checkEmail()) {
    textError += "?????nh d???ng Email ch??a ????ng!\n";
    addStyleError(getEmail);
    removeStyleError(getEmail);
    check = false;
<<<<<<< HEAD
  } else {
    textCorrect += "Email: " + getEmail.value + "\n";
  }
=======
  } else if (!checkEmail()) {
    textCorrect += "Email: " + getEmail.value + "\n";
  }
  if (!checkPass()) {
    textError +=
      "M???t kh???u ph???i ph???i c?? k?? t??? ?????u l?? ch??? in hoa v?? bao g???m s???, ch??? th?????ng, k?? t??? ?????c bi???t v?? ph???i l???n h??n 8\n";
    addStyleError(getPass);
    removeStyleError(getPass);
    addStyleError(getConfirmPass);
    removeStyleError(getConfirmPass);
    check = false;
  } else if (getConfirmPass.value != getPass.value) {
    textError += "M???t kh???u kh??ng kh???p\n";
    addStyleError(getConfirmPass);
    removeStyleError(getConfirmPass);
    check = false;
  }

>>>>>>> fa02e2fe9fe4ab158e47468df9d75dc1112222d2
  if (getDay.value == "" && getMonth.value == "" && getYear.value == "") {
    textError += "Vui l??ng ch???n ng??y th??ng n??m sinh!\n";
    if (getDay.value == "") {
      addStyleError(getDay);
      removeStyleError(getDay);
    }
    if (getMonth.value == "") {
      addStyleError(getMonth);
      removeStyleError(getMonth);
    }
    if (getYear.value == "") {
      addStyleError(getYear);
      removeStyleError(getYear);
    }
    check = false;
  } else {
    textCorrect +=
      "Ng??y sinh: " +
      getDay.value +
      "/" +
      getMonth.value +
      "/" +
      getYear.value +
      "\n";
  }
  let gender = checkGender();
  if (!gender) {
    textError += "Vui l??ng ch???n gi???i t??nh !\n";
    addStyleError(getGender[0]);
    removeStyleError(getGender, "array");
    check = false;
  } else {
    textCorrect += "Gi???i t??nh: " + gender + "\n";
  }
  let soThich = checkSoThich();
  if (!soThich) {
    textError += "Vui l??ng ch???n s??? th??ch!\n";
    removeStyleError(getSoThich, "array");
    check = false;
  } else {
    textCorrect += "S??? Th??ch: " + soThich + "\n";
  }
  if (getQuocTich.value == "") {
    textError += "Vui l??ng ch???n qu???c t???ch!\n";
    addStyleError(getQuocTich);
    removeStyleError(getQuocTich);
    check = false;
  } else {
    textCorrect += "Qu???c t??ch: " + getQuocTich.value + "\n";
  }
  if (getContent.value.length >= 200) {
    textError += "N???i dung ph???i ??t h??n 200!\n";
    addStyleError(getContent);
    removeStyleError(getContent);
    check = false;
  } else {
    textCorrect += "N???i dung: " + getContent.value + "\n";
  }
  if (check) {
    alert(textCorrect);
  } else {
    alert(textError);
  }
});
