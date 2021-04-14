let minus = document.querySelectorAll(".minus-btn");
let plus = document.querySelectorAll(".plus-btn");
let checkboxes = document.getElementsByName("product");
let quantity = document.getElementsByName("quantity");
let price = document.querySelectorAll("td.product-price");
let checkboxeAll = document.getElementsByName("product-all");
let filterByPrice = document.getElementsByName("filter-by-price");
// Format tiền
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
// Set giá sản phẩm
function setPrice() {
  for (let i = 0; i < price.length; i++) {
    price[i].querySelector(".unit-price").innerText = formatCash(
      price[i].getAttribute("data-price")
    );
    price[i]
      .closest("tr")
      .querySelector(".subtotal-price").innerText = formatCash(
      price[i].getAttribute("data-price")
    );
  }
}
setPrice();
// Nút thay đổi số lượng sản phẩm
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function (e) {
    e.preventDefault();
    var input = this.closest("div").querySelector("input");
    var value = parseInt(input.value);
    if (value > 1) {
      value = value - 1;
    } else {
      value = 1;
    }
    input.value = value;
    setSubtotalPrice(e.target, value);
    setSubTotal();
  });
  plus[i].addEventListener("click", function (e) {
    e.preventDefault();
    var input = this.closest("div").querySelector("input");
    var value = parseInt(input.value);
    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }
    input.value = value;
    setSubtotalPrice(e.target, value);
    setSubTotal();
  });
}
// Check Sản phẩm
function toggle(e) {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = e.checked;
    quantity[i].disabled = !e.checked;
    minus[i].disabled = !e.checked;
    plus[i].disabled = !e.checked;
  }
  setSubTotal();
}
function checkBox() {
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
      setSubTotal();
      quantity[i].disabled = !this.checked;
      minus[i].disabled = !this.checked;
      plus[i].disabled = !this.checked;
      checkboxeAll[0].checked = true;
      if (this.checked == false) {
        checkboxeAll[0].checked = false;
      } else {
        for (let ii = 0; ii < checkboxes.length; ii++) {
          if (checkboxes[ii].checked == false) {
            checkboxeAll[0].checked = false;
            break;
          }
        }
      }
    });
  }
}
checkBox();
// Tính tổng tiền từng sản phẩm
function setSubtotalPrice(e, quantity) {
  let subtotalPrice = e.closest("tr").getElementsByClassName("subtotal-price");
  let getPrice = e
    .closest("tr")
    .querySelector(".product-price")
    .getAttribute("data-price");
  subtotalPrice[0].innerText = formatCash(String(getPrice * quantity));
}

//Tính tổng
function setSubTotal() {
  let sum = 0;
  price = document.querySelectorAll("td.product-price");
  for (let i = 0; i < quantity.length; i++) {
    if (checkboxes[i].checked) {
      sum += quantity[i].value * price[i].getAttribute("data-price");
    }
  }
  document.querySelector(".subtotal").innerHTML = formatCash(String(sum));
  document.querySelector(".total").innerHTML = formatCash(String(sum));
}
for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener("change", function (e) {
    setSubtotalPrice(e.target, this.value);
    setSubTotal();
  });
}
//Lọc sản phẩm
filterByPrice[0].addEventListener("change", function () {
  switch (this.value) {
    case "1":
      filterPriceRange(0, 300000);
      break;
    case "2":
      filterPriceRange(300000, 700000);
      break;
    case "3":
      filterPriceRange(700000, Number.MAX_SAFE_INTEGER);
      break;
  }
});

function filterPriceRange(min, max) {
  price = document.querySelectorAll("td.product-price");
  for (let i = 0; i < price.length; i++) {
    let getPrice = price[i].getAttribute("data-price");
    if (!(min < getPrice && getPrice <= max) && max != min) {
      price[i].closest("tr").style.display = "none";
      checkboxes[i].checked = false;
    } else if (max == 0 && min == 0) {
      price[i].closest("tr").style.display = "";
      checkboxes[i].checked = false;
      quantity[i].disabled = true;
      minus[i].disabled = true;
      plus[i].disabled = true;
    } else {
      price[i].closest("tr").style.display = "";
      checkboxes[i].checked = true;
      checkboxeAll[0].checked = true;
      quantity[i].disabled = false;
      minus[i].disabled = false;
      plus[i].disabled = false;
    }
  }
  setSubTotal();
}
// Xóa sản phẩm
function removeItemFromCart() {
  let remove = document.getElementsByClassName("remove");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      this.closest("tr").remove();
      if (remove.length == 0) {
        document.getElementById("cart-details").innerHTML =
          "<div class='col small-12 large-12 text-center'><h2>Chưa có sản phẩm nào trong giỏ hàng.</h2><a href='' class='checkout-button button secondary'>QUAY TRỞ LẠI CỬA HÀNG</a></div>";
      } else {
        setSubTotal();
      }
    });
  }
}
removeItemFromCart();
// Nút Reset
function buttonReset() {
  document
    .querySelector(".filter-by-price button")
    .addEventListener("click", function () {
      filterPriceRange(0, 0);
      checkboxeAll[0].checked = false;
      filterByPrice[0].querySelector("option").selected = true;
    });
}
buttonReset();
document
  .getElementsByName("apply_coupon")[0]
  .addEventListener("click", function () {
    alert("Chức năng đang hoàn thiện");
  });
