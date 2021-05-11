const btnGiai = document.getElementById("giai");
var getNumberX = document.getElementById("x");
var getNumberY = document.getElementById("y");
var getNumberTraLoi = document.getElementById("traloi");
[getNumberX, getNumberY, getNumberTraLoi].forEach(function (element) {
  element.addEventListener("keydown", function () {
    btnGiai.disabled = false;
  });
});
function getRandomArbitrary(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function taoso() {
  getNumberX.value = getRandomArbitrary();
  getNumberY.value = getRandomArbitrary();
  getNumberTraLoi.value = "";
  btnGiai.disabled = false;
}
let lanGiaiDung = 1;
let lanGiaiSai = 1;
function giaiDung() {
  document.getElementById("langiaidung").innerHTML = lanGiaiDung++;
}
function giaiSai() {
  document.getElementById("langiaisai").innerHTML = lanGiaiSai++;
}
let ptb2 = {
  nhap: function () {
    this.x = getNumberX.value;
    this.y = getNumberY.value;
    this.traLoi = getNumberTraLoi.value;
  },
  danhgia: function () {
    let ketqua = document.getElementById("ketqua");
    this.nhap();
    if (isNaN(this.x) || this.x == "") {
      alert("Vui lòng nhập vào số x");
      return;
    }
    if (isNaN(this.y) || this.y == "") {
      alert("Vui lòng nhập vào số y");
      return;
    }
    if (isNaN(this.traLoi) || this.traLoi == "") {
      alert("Vui lòng nhập vào đáp án");
      return;
    }
    if (Number(this.x) + Number(this.y) == Number(this.traLoi)) {
      ketqua.innerHTML = "Chính xác Hay lắm! Mời bé tiếp tục";
      giaiDung();
    } else {
      giaiSai();
      ketqua.innerHTML = "Ôi sai rồi! Thử lại đi bé";
    }
  },
};

btnGiai.addEventListener("click", () => {
  ptb2.danhgia();
  btnGiai.disabled = true;
});
