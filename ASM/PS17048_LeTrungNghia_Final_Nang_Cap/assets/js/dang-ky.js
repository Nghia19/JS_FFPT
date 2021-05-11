let getMSSV = document.getElementById("mssv");
let getName = document.getElementById("name");
let getEmail = document.getElementById("email");
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
getDangKy.addEventListener("click", function (e) {
  e.preventDefault();
  let check = true;
  let textError = "",
    textCorrect = "";
  if (getMSSV.value == "") {
    textError += "Vui lòng nhập mã số sinh viên! \n";
    addStyleError(getMSSV);
    removeStyleError(getMSSV);
    check = false;
  } else {
    textCorrect += "MSVS: " + getMSSV.value + "\n";
  }
  if (getName.value == "") {
    textError += "Vui lòng nhập tên!\n";
    addStyleError(getName);
    removeStyleError(getName);
    check = false;
  } else {
    textCorrect += "Họ tên: " + getName.value + "\n";
  }
  if (getEmail.value == "") {
    textError += "Vui lòng nhập Email!\n";
    addStyleError(getEmail);
    removeStyleError(getEmail);
    check = false;
  } else if (!checkEmail()) {
    textError += "Định dạng Email chưa đúng!\n";
    addStyleError(getEmail);
    removeStyleError(getEmail);
    check = false;
  } else {
    textCorrect += "Email: " + getEmail.value + "\n";
  }
  if (getDay.value == "" && getMonth.value == "" && getYear.value == "") {
    textError += "Vui lòng chọn ngày tháng năm sinh!\n";
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
      "Ngày sinh: " +
      getDay.value +
      "/" +
      getMonth.value +
      "/" +
      getYear.value +
      "\n";
  }
  let gender = checkGender();
  if (!gender) {
    textError += "Vui lòng chọn giới tính !\n";
    addStyleError(getGender[0]);
    removeStyleError(getGender, "array");
    check = false;
  } else {
    textCorrect += "Giới tính: " + gender + "\n";
  }
  let soThich = checkSoThich();
  if (!soThich) {
    textError += "Vui lòng chọn sở thích!\n";
    removeStyleError(getSoThich, "array");
    check = false;
  } else {
    textCorrect += "Sở Thích: " + soThich + "\n";
  }
  if (getQuocTich.value == "") {
    textError += "Vui lòng chọn quốc tịch!\n";
    addStyleError(getQuocTich);
    removeStyleError(getQuocTich);
    check = false;
  } else {
    textCorrect += "Quốc tích: " + getQuocTich.value + "\n";
  }
  if (getContent.value.length >= 200) {
    textError += "Nội dung phải ít hơn 200!\n";
    addStyleError(getContent);
    removeStyleError(getContent);
    check = false;
  } else {
    textCorrect += "Nội dung: " + getContent.value + "\n";
  }
  if (check) {
    alert(textCorrect);
  } else {
    alert(textError);
  }
});
