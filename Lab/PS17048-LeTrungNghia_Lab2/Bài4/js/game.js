function game(a) {
  let x = 10 + Math.round(5 * Math.random());
  if (a == x) {
    document.getElementById("ketqua").innerHTML = "Chúc mừng bạn đã đoán đúng";
  } else if (a > x) {
    document.getElementById("ketqua").innerHTML =
      "Giá trị của bạn lớn hơn số bí mật";
  } else {
    document.getElementById("ketqua").innerHTML =
      "Giá trị của bạn nhỏ hơn số bí mật";
  }
}
