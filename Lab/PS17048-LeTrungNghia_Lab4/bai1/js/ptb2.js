var ptb2 = {
  a: prompt("Hãy nhập giá trị a:"),
  b: prompt("Hãy nhập giá trị b:"),
  c: prompt("Hãy nhập giá trị c:"),
  giai: function () {
    document.getElementById("phuongtrinh").innerHTML =
      this.a + "x<sup>2</sup> + " + this.b + "x = " + this.c;
    if (this.a == 0) {
      // PT bac 1
      if (this.b == 0 && this.c != 0) {
        document.getElementById("ketqua").innerHTML = "Phương trình vô nghiệm";
      } else if (this.b == 0 && this.c == 0) {
        document.getElementById("ketqua").innerHTML =
          "Phương trình có vô số nghiệm";
      } else {
        document.getElementById("ketqua").innerHTML =
          "Phương trình có nghiệm là: x = " + -this.c / this.b;
      }
    } else {
      // PT bac 2
      let delta = Math.pow(this.b, 2) - 4 * this.a * this.c;
      if (delta < 0) {
        document.getElementById("ketqua").innerHTML = "Phương trình vô nghiệm";
      } else if (delta == 0) {
        document.getElementById("ketqua").innerHTML =
          "Phương trình có nghiệm kép x = " + -this.b / (2 * this.a);
      } else {
        let n1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        let n2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        document.getElementById("ketqua").innerHTML =
          "Phương trình có 2 nghiệm phân biệt: <br>" +
          "x1= " +
          n1 +
          "<br>x2= " +
          n2;
      }
    }
  },
};
ptb2.giai();
