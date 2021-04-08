var ptb2 = {
  a: null,
  b: null,
  c: null,
  nhap: function () {
    do {
      this.a = prompt("Hãy nhập giá trị a:");
      if (isNaN(this.a) == true || this.a == "") {
        alert("Đây không phải là số , mời bạn nhập lại ");
      }
    } while (isNaN(this.a) == true || this.a == "");

    do {
      this.b = prompt("Hãy nhập giá trị b:");
      if (isNaN(this.b) == true || this.b == "") {
        alert("Đây không phải là số , mời bạn nhập lại ");
      }
    } while (isNaN(this.b) == true || this.b == "");
    do {
      this.c = prompt("Hãy nhập giá trị c:");
      if (isNaN(this.c) == true || this.c == "") {
        alert("Đây không phải là số , mời bạn nhập lại ");
      }
    } while (isNaN(this.c) == true || this.c == "");
    this.xuat();
  },
  xuat: function () {
    document.getElementById("phuongtrinh").innerHTML =
      this.a + "x<sup>2</sup> + " + this.b + "x = " + this.c;
  },
  giai: function () {
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
ptb2.nhap();
