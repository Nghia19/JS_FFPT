var sv = {
  nhap: function () {
    do {
      this.hoten = prompt("Moi ban nhap ho ten sv: ");
      if (this.hoten == "") {
        alert("Họ tên không được để trống");
      }
    } while (this.hoten == "");
    do {
      this.diem = prompt("Moi ban nhap diem sv: ");
      if (isNaN(this.diem) == true || this.diem == "") {
        alert("Đây không phải là số , mời bạn nhập lại ");
      }
      if (this.diem < 0 || this.diem > 10) {
        alert("Điểm phải từ 1-10");
      }
    } while (
      isNaN(this.diem) == true ||
      this.diem == "" ||
      this.diem < 0 ||
      this.diem > 10
    );
    sv.hienthi();
  },
  hienthi: function () {
    if (this.diem >= 5) {
      this.hocluc = "Đậu";
    } else {
      this.hocluc = "Rớt";
    }
    document.getElementById("hovaten").innerText = this.hoten;
    document.getElementById("diem").innerText = this.diem;
    document.getElementById("hocluc").innerText = this.hocluc;
  },
};
sv.nhap();
