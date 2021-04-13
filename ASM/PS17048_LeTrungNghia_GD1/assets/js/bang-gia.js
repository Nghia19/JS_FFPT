let minus = document.querySelectorAll(".minus-btn");
let plus = document.querySelectorAll(".plus-btn");
let checkboxes = document.getElementsByName("product");
let quantity = document.getElementsByName("quantity");
let price = document.querySelectorAll("td.product-price");
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
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
  let checkboxeAll = document.getElementsByName("product-all");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
      setSubTotal();
      quantity[i].disabled = !this.checked;
      minus[i].disabled = !this.checked;
      plus[i].disabled = !this.checked;
      if (this.checked == false) {
        checkboxeAll[0].checked = false;
      } else {
        for (let ii = 0; ii < checkboxes.length; ii++) {
          if (checkboxes[ii].checked == false) {
            checkboxeAll[0].checked = false;
            break;
          } else {
            checkboxeAll[0].checked = true;
          }
        }
      }
    });
  }
}
checkBox();
function setSubtotalPrice(e, quantity) {
  let subtotalPrice = e.closest("tr").getElementsByClassName("subtotal-price");
  let getPrice = e
    .closest("tr")
    .querySelector(".product-price")
    .getAttribute("data-price");
  subtotalPrice[0].innerText = formatCash(String(getPrice * quantity));
}

for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener("change", function (e) {
    setSubtotalPrice(e.target, this.value);
  });
}
for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener("change", function (e) {
    setSubtotalPrice(e.target, this.value);
  });
}
function setSubTotal(coupon_code) {
  let c = document.getElementsByClassName("subtotal-price");
  let sum = 0;
  for (let i = 0; i < quantity.length; i++) {
    if (checkboxes[i].checked) {
      sum += quantity[i].value * price[i].getAttribute("data-price");
    }
  }
  document.querySelector(".subtotal").innerHTML = formatCash(String(sum));
  document.querySelector(".total").innerHTML = formatCash(String(sum));
}
setSubTotal();
