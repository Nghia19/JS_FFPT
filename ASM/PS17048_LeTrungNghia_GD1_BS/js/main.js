const giaiPT = document.getElementById("giaiPT");
var getNumberA = document.getElementById("numbera");
var getNumberB = document.getElementById("numberb");
var getNumberC = document.getElementById("numberc");
[getNumberA, getNumberB, getNumberC].forEach(function (element) {
  element.addEventListener("keydown", function () {
    giaiPT.disabled = false;
  });
});
function getRandomArbitrary(min = -10, max = 20) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getNumberRandom() {
  getNumberA.value = getRandomArbitrary();
  getNumberB.value = getRandomArbitrary();
  getNumberC.value = getRandomArbitrary();
  giaiPT.disabled = false;
}
let lanGiai = 1;
function getLanGiai() {
  document.getElementById("langiai").innerHTML = lanGiai++;
}
let ptb2 = {
  nhap: function () {
    this.a = getNumberA.value;
    this.b = getNumberB.value;
    this.c = getNumberC.value;
  },
  xuat: function () {
    let b = this.b > 0 ? " + " + this.b : " - " + Math.abs(this.b);
    let c = this.c > 0 ? " + " + this.c : " - " + Math.abs(this.c);
    document.getElementById("phuongtrinh").innerHTML =
      this.a + "x<sup>2</sup> " + b + "x" + c + " = 0";
  },
  giai: function () {
    let nghiem = document.getElementById("nghiem");
    this.nhap();
    if (isNaN(this.a) || this.a == "") {
      alert("Vui lòng nhập vào số a");
      return;
    }
    if (isNaN(this.b) || this.b == "") {
      alert("Vui lòng nhập vào số b");
      return;
    }
    if (isNaN(this.c) || this.c == "") {
      alert("Vui lòng nhập vào số c");
      return;
    }
    this.xuat();
    getLanGiai();
    if (this.a == 0) {
      // PT bac 1
      if (this.b == 0 && this.c != 0) {
        nghiem.innerHTML = "Phương trình vô nghiệm";
      } else if (this.b == 0 && this.c == 0) {
        nghiem.innerHTML = "Phương trình có vô số nghiem";
      } else {
        nghiem.innerHTML =
          "<p>Phương trình có nghiệm là: x = " +
          (-this.c / this.b).toFixed(2) +
          "<p>";
      }
    } else {
      // PT bac 2
      let delta = Math.pow(this.b, 2) - 4 * this.a * this.c;
      if (delta < 0) {
        nghiem.innerHTML = "Phương trình vô nghiệm";
      } else if (delta == 0) {
        nghiem.innerHTML =
          "<p>Phương trình có nghiệm kép x = " +
          (-this.b / (2 * this.a)).toFixed(2) +
          "</p>";
      } else {
        let n1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        let n2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        nghiem.innerHTML =
          "<p>Phương trình có 2 nghiệm phân biệt:</p>" +
          "<p>x1 = " +
          n1.toFixed(2) +
          "</p><p>x2 = " +
          n2.toFixed(2) +
          "</p>";
      }
    }
  },
};

giaiPT.addEventListener("click", () => {
  ptb2.giai();
  giaiPT.disabled = true;
});
const elementDate = document.getElementById("printDate");
const elementDay = document.getElementById("printDay");
const elementTime = document.getElementById("printTime");
const listOfDays = [
  "Chủ nhật",
  "Thứ Hai",
  "Thứ ba",
  "Thứ tư",
  "Thứ năm",
  "Thứ sáu",
  "Thứ bảy",
];
function checkNumber(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function printDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  elementDate.innerHTML =
    checkNumber(day) + "/" + checkNumber(month) + "/" + year;
}
function printDay(date) {
  let numberOfDay = date.getDay();
  let day = listOfDays[numberOfDay];
  elementDay.innerHTML = day + ", ";
}
function printTime(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  elementTime.innerHTML =
    checkNumber(hour) + ":" + checkNumber(minute) + ":" + checkNumber(second);
}
setInterval(() => {
  let date = new Date();
  printTime(date);
  printDate(date);
  printDay(date);
}, 1000);
