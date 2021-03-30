function ptb2(a, b, c) {
  document.getElementById("phuongtrinh").innerHTML =
    a + "x<sup>2</sup> + " + b + "x = " + c;
  if (a == 0) {
    // PT bac 1
    if (b == 0 && c != 0) {
      document.getElementById("ketqua").innerHTML = "Phương trình vô nghiệm";
    } else if (b == 0 && c == 0) {
      document.getElementById("ketqua").innerHTML =
        "Phương trình có vô số nghiệm";
    } else {
      document.getElementById("ketqua").innerHTML =
        "Phương trình có nghiệm là: x = " + -c / b;
    }
  } else {
    // PT bac 2
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      document.getElementById("ketqua").innerHTML = "Phương trình vô nghiệm";
    } else if (delta == 0) {
      document.getElementById("ketqua").innerHTML =
        "Phương trình có nghiệm kép x = " + -b / (2 * a);
    } else {
      let n1 = (-b + Math.sqrt(delta)) / (2 * a);
      let n2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("ketqua").innerHTML =
        "Phương trình có 2 nghiệm phân biệt: <br>" +
        "x1= " +
        n1 +
        "<br>x2= " +
        n2;
    }
  }
}
