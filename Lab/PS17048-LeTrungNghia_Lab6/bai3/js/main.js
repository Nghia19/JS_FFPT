let getSanPham = document.getElementById("san_pham");
let getLoai = document.getElementById("loai");
let getDonGia = document.getElementById("don_gia");
let getNhanHang = document.getElementsByName("noi_nhan_hang");
let getPhiShip = document.getElementById("phi_ship");
let getDangKy = document.getElementById("dang_ky");
getDangKy.addEventListener("click", function (e) {
  e.preventDefault();
  if (getSanPham.value == "") {
    alert("Vui lòng nhập tên sản phẩm!");
    return false;
  } else if (getLoai.value == "") {
    alert("Vui lòng chọn loại sản phẩm!");
    return false;
  } else if (isNaN(getDonGia.value) || getDonGia.value == "") {
    alert("Vui lòng nhập số!");
    return false;
  } else if (parseFloat(getDonGia.value) <= 0) {
    alert("Vui lòng nhập số dương!");
    return false;
  } else if (!getNhanHang[0].checked && !getNhanHang[1].checked) {
    alert("Vui lòng chọn nơi nhận hàng!");
    return false;
  } else {
    alert("Chúc mừng bạn đã nhập đúng");
    return true;
  }
});

getNhanHang.forEach(function (element) {
  element.addEventListener("click", function () {
    getPhiShip.closest("div").style.display =
      element.value == "ngoai_thanh" ? "block" : "none";
  });
});
