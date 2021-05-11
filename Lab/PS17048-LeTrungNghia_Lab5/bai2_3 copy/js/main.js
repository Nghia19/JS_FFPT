const CARTDETAILS = document.getElementsByClassName("cart-details");
function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
function setUnitPrice() {
  let price = document.getElementsByClassName("price");
  for (let i = 0; i < price.length; i++) {
    price[i].querySelector(".unit-price").innerText = formatCash(
      price[i].getAttribute("data-price")
    );
  }
}
setUnitPrice();
let cart = [];
function Item(checkBox, name, imgSrc, price, count) {
  this.checkBox = checkBox;
  this.name = name;
  this.imgSrc = imgSrc;
  this.price = price;
  this.count = count;
}
let addCart = document.querySelectorAll(".add-the-cart a");
for (let index = 0; index < addCart.length; index++) {
  addCart[index].addEventListener("click", function (e) {
    e.preventDefault();
    let cc = this.closest(".product");
    let name = cc.getElementsByClassName("product-title");
    let price = cc.getElementsByClassName("price");
    let imgSrc = cc.getElementsByTagName("img");
    addItemToCart(
      true,
      name[0].innerText,
      imgSrc[0].src,
      price[0].getAttribute("data-price"),
      1
    );
    displayCart();
  });
}

// Add to cart
function addItemToCart(checkBox, name, imgSrc, price, count) {
  for (let item in cart) {
    if (cart[item].name === name) {
      cart[item].count++;
      return;
    }
  }
  var item = new Item(checkBox, name, imgSrc, price, count);
  cart.push(item);
}
function displayCart() {
  if (cart.length > 0) {
    CARTDETAILS[0].style.display = "flex";
  }
  let output = "";
  for (let i in cart) {
    let sum = cart[i].price * cart[i].count;
    let classActive = sum > 1000000 ? "active" : "";
    let checkBox = cart[i].checkBox == true ? "checked" : "";
    output += `<tr class="cart-item  ${classActive}">
    <td class="product-checkbox">
      <input type="checkbox" name="product" id="product-1" ${checkBox} onclick="checkBox(this)"/>
    </td>
    <td class="product-thumbnail">
      <img width="90" height="90" src="${cart[i].imgSrc}" />
    </td>
    <td class="product-name">${cart[i].name}</td>
    <td class="product-price" data-title="Giá">
      <span class="price" data-price="">${formatCash(
        cart[i].price
      )} <span class="currencySymbol">VNĐ</span></span>
    </td>
    <td class="product-quantity" data-title="Số lượng">
      <div class="quantity">
        <button class="minus-btn" type="button" name="button" onclick="buttonMinusPlus(this, -1)">
          -
        </button>
        <input type="text" name="quantity" value="${
          cart[i].count
        }"  onchange="changeQuantity(this)"/>
        <button class="plus-btn" type="button" name="button" onclick="buttonMinusPlus(this, +1)">
          +
        </button>
      </div>
    </td>
    <td class="product-subtotal" data-price="${cart[i].price}">
      <span>${formatCash(
        String(sum)
      )}</span><span class="currencySymbol">VNĐ</span>
    </td>
    <td class="product-remove">
      <i class="far fa-times-circle remove" onclick="removeItemFromCartAll(this)"></i>
    </td>
  </tr>`;
  }
  document.getElementById("show-cart").innerHTML = output;
  subTotal();
}
function toggle(e) {
  let checkboxes = document.getElementsByName("product");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = e.checked;
    cart[i].checkBox = e.checked;
  }
  subTotal();
}
function setCheckBoxForItem(name, checkBox) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].checkBox = checkBox;
      break;
    }
  }
}
function checkBox(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  setCheckBoxForItem(name[0].innerText, e.checked);
  subTotal();
  let checkboxes = document.getElementsByName("product-all");
  for (let i in cart) {
    if (cart[i].checkBox == false) {
      checkboxes[0].checked = false;
      break;
    } else {
      checkboxes[0].checked = true;
    }
  }
}
function removeItemFromCartAll(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  for (var item in cart) {
    if (cart[item].name === name[0].innerText) {
      cart.splice(item, 1);
      break;
    }
  }
  e.closest("tr").remove();
  checkBox(e);
  if (cart.length == 0) CARTDETAILS[0].style.display = "none";
  subTotal();
}
function setCountForItem(name, count) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].count = count;
      break;
    }
  }
}
function subTotal() {
  let sum = 0;
  for (let i in cart) {
    if (cart[i].checkBox == true) sum += cart[i].count * cart[i].price;
  }
  document.querySelector(".subtotal").innerHTML = formatCash(String(sum));
  let total = document.querySelector(".total");
  total.innerHTML = formatCash(String(sum));
  if (sum > 5000000) {
    total.closest("tr").classList.add("active");
  } else {
    total.closest("tr").classList.remove("active");
  }
}

function changeQuantity(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  var input = e.closest("tr").querySelector("input[name=quantity]");
  var value = parseInt(input.value);
  if (value < 1) {
    value = 1;
  } else if (value > 100) {
    value = 100;
  }
  var getPrice = e
    .closest("tr")
    .querySelector(".product-subtotal")
    .getAttribute("data-price");
  let setPrice = e.closest("tr").querySelector(".product-subtotal span");
  let sum = value * getPrice;
  setPrice.innerHTML = formatCash(String(sum));
  if (sum > 1000000) {
    e.closest("tr").classList.add("active");
  } else {
    e.closest("tr").classList.remove("active");
  }
  setCountForItem(name[0].innerText, value);
  subTotal();
}

function buttonMinusPlus(e, number) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  var input = e.closest("div").querySelector("input");
  var value = parseInt(input.value);
  if (value <= 1 && number == -1) {
    value = 1;
  } else if (value >= 100 && number == +1) {
    value = 100;
  } else {
    value += number;
  }
  input.value = value;
  var getPrice = e
    .closest("tr")
    .querySelector(".product-subtotal")
    .getAttribute("data-price");
  let setPrice = e.closest("tr").querySelector(".product-subtotal span");
  let sum = value * getPrice;
  setPrice.innerHTML = formatCash(String(sum));
  if (sum > 1000000) {
    e.closest("tr").classList.add("active");
  } else {
    e.closest("tr").classList.remove("active");
  }
  setCountForItem(name[0].innerText, value);
  subTotal();
}
document
  .getElementsByName("apply_coupon")[0]
  .addEventListener("click", function () {
    alert("Chức năng đang hoàn thiện");
  });
document
  .getElementsByClassName("checkout-button")[0]
  .addEventListener("click", function () {
    alert("Chức năng đang hoàn thiện");
  });
