let Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let getHo = document.getElementById("ho");
let getTen = document.getElementById("ten");
let getDay = document.getElementById("day");
let getMonth = document.getElementById("month");
let getYear = document.getElementById("year");
let getGender = document.getElementsByName("gender");
let getPhone = document.getElementById("phone");
let getSoThich = document.getElementsByName("so_thich");
let getSoThichKhac = document.getElementById("so_thich_khac");
let getDangKy = document.getElementById("dang_ky");
for (let i = 0; i < getSoThich.length - 1; i++) {
  getSoThich[i].addEventListener("click", function () {
    getSoThichKhac.style.display = getSoThich[getSoThich.length - 2].checked
      ? "block"
      : "none";
  });
}
function checkSoThich() {
  let flag = false;
  for (let i = 0; i < getSoThich.length - 1; i++) {
    if (getSoThich[i].checked == true) {
      flag = true;
      break;
    }
  }
  if (
    getSoThich[getSoThich.length - 2].checked &&
    getSoThich[getSoThich.length - 1].value == ""
  ) {
    flag = false;
  }
  return flag;
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
getDangKy.addEventListener("click", function (e) {
  e.preventDefault();
  if (getHo.value == "") {
    alert("Vui l??ng nh???p h???!");
    return false;
  } else if (getTen.value == "") {
    alert("Vui l??ng nh???p T??n!");
    return false;
  } else if (getDay.value == "") {
    alert("Vui l??ng ch???n ng??y sinh!");
    return false;
  } else if (getMonth.value == "") {
    alert("Vui l??ng ch???n th??ng sinh!");
    return false;
  } else if (getYear.value == "") {
    alert("Vui l??ng ch???n n??m sinh!");
    return false;
  } else if (!getGender[0].checked && !getGender[1].checked) {
    alert("Vui l??ng ch???n gi???i t??nh!");
    return false;
  } else if (isNaN(getPhone.value) || getPhone.value == "") {
    alert("Vui l??ng nh???p s??? ??i???n tho???i!");
  } else if (getPhone.value.length < 10 || getPhone.value.length > 11) {
    alert("S??? ??i???n tho???i ch??a ????ng!");
    return false;
  } else if (!checkSoThich()) {
    alert("Vui l??ng ch???n s??? th??ch!");
  } else {
    alert("Ch??c m???ng b???n ???? nh???p ????ng");
    return true;
  }
});
