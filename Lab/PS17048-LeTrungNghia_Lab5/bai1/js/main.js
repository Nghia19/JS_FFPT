function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
let setTitle = document.getElementById("product-title");
let setSize = document.getElementById("size");
let setQuantity = document.getElementById("quantity");
let setCartPrice = document.getElementById("price");
let setSubtotal = document.getElementById("subtotal");
let unitPrice = document.getElementsByClassName("unit-price");
let getSize = document.querySelectorAll(".swatches label");
let getInput = document.querySelectorAll(".swatches input");
let getQuantity = document.getElementsByName("quantity")[0];
let getPrice, getSubtotal;
function setPrice() {
  for (let i = 0; i < getSize.length; i++) {
    if (getInput[i].checked) {
      getPrice = getInput[i].value;
      unitPrice[0].innerText = formatCash(getPrice);
      setCartPrice.innerText = formatCash(getPrice);
      setSize.innerText = getSize[i].innerText;
      subTotal(1, getPrice);
    }
    getSize[i].addEventListener("click", function () {
      getPrice = getInput[i].value;
      unitPrice[0].innerText = formatCash(getPrice);
      setCartPrice.innerText = formatCash(getPrice);
      setSize.innerText = getSize[i].innerText;
      subTotal(getQuantity.value, getPrice);
    });
  }
}
setPrice();
document
  .getElementsByName("add-to-cart")[0]
  .addEventListener("click", function () {
    document.getElementById("cart-details").style.display = "block";
    setTitle.innerText = document.getElementsByTagName("h1")[0].innerText;
  });
function subTotal(quantity, price) {
  setSubtotal.innerText = formatCash(String(quantity * price));
}
getQuantity.addEventListener("change", function () {
  setQuantity.innerText = this.value;
  subTotal(this.value, getPrice);
});
let minus = document.querySelectorAll(".minus-btn");
let plus = document.querySelectorAll(".plus-btn");
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
    setQuantity.innerText = value;
    subTotal(value, getPrice);
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
    setQuantity.innerText = value;
    subTotal(value, getPrice);
  });
}
