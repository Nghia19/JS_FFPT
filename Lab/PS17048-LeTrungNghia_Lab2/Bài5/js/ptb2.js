function ptb2(a, b, c) {
  document.getElementById("phuongtrinh").innerHTML =
    a + "x<sup>2</sup> + " + b + "x = " + c;
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) {
    document.getElementById("ketqua").innerHTML = "Phương trình vô nghiệm";
  } else if (delta == 0) {
    let n0 = -b / (2 * a);
    document.getElementById("ketqua").innerHTML =
      "Phương trình có nghiệm kép:\n" + "x0: " + n0;
  } else {
    let n1 = (-b + Math.sqrt(delta)) / (2 * a);
    let n2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById("ketqua").innerHTML =
      "Phương trình có 2 nghiệm phân biệt: <br>" +
      "x1: " +
      n1 +
      "<br>x2: " +
      n2;
  }
}
