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
function toggle(source) {
  checkboxes = document.getElementsByName("product");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = source.checked;
  }
}
let cart = [];
function Item(name, imgSrc, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
  this.imgSrc = imgSrc;
}
let addCart = document.getElementsByClassName("add-the-cart");
for (let index = 0; index < addCart.length; index++) {
  addCart[index].addEventListener("click", function (e) {
    e.preventDefault();
    let cc = this.closest(".product");
    let name = cc.getElementsByClassName("product-title");
    let price = cc.getElementsByClassName("price");
    let imgSrc = cc.getElementsByTagName("img");
    addItemToCart(
      name[0].innerText,
      imgSrc[0].src,
      price[0].getAttribute("data-price"),
      1
    );
    displayCart();
  });
}

// Add to cart
function addItemToCart(name, imgSrc, price, count) {
  for (let item in cart) {
    if (cart[item].name === name) {
      cart[item].count++;
      return;
    }
  }
  var item = new Item(name, imgSrc, price, count);
  cart.push(item);
}
function displayCart() {
  const CARTDETAILS = document.getElementsByClassName("cart-details");
  console.log(CARTDETAILS);
  if (cart.length > 0) {
    CARTDETAILS[0].style.display = "flex";
  } else {
    CARTDETAILS[0].style.display = "none";
  }
  let output = "";
  for (let i in cart) {
    let total = String(cart[i].price * cart[i].count);
    output += `<tr class="cart-item">
    <td class="product-checkbox">
      <input type="checkbox" name="product" id="product-1" />
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
        <button class="minus-btn" type="button" name="button" onclick="xx(this, -1)">
          -
        </button>
        <input type="text" name="quantity" value="${
          cart[i].count
        }"  onchange="my(this)"/>
        <button class="plus-btn" type="button" name="button" onclick="xx(this, +1)">
          +
        </button>
      </div>
    </td>
    <td class="product-subtotal" data-title="Thành tiền">
      <span class="priceccc">${formatCash(
        String(cart[i].price * cart[i].count)
      )} <span class="currencySymbol">VNĐ</span></span>
    </td>
    <td class="product-remove">
      <a  class="remove" aria-label="Remove this item" onclick="ccc(this)"
        ><i class="far fa-times-circle"></i
      ></a>
    </td>
  </tr>`;
  }
  document.getElementById("show-cart").innerHTML = output;
  document.querySelector(".total").innerHTML = sums();
}
function removeItemFromCartAll(name) {
  for (var item in cart) {
    if (cart[item].name === name) {
      cart.splice(item, 1);
      break;
    }
  }
}
function ccc(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  removeItemFromCartAll(name[0].innerText);
  displayCart();
}
function setCountForItem(name, count) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].count = count;
      break;
    }
  }
  displayCart();
}
function sums() {
  let sum = 0;
  for (let i in cart) {
    sum += cart[i].count * cart[i].price;
  }
  return formatCash(String(sum));
}

function my(e) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  var input = e.closest("tr").querySelector("input[name=quantity]");
  var count = parseInt(input.value);
  if (count < 1) {
    count = 1;
  } else if (count > 100) {
    count = 100;
  }
  setCountForItem(name[0].innerText, count);
}

function xx(e, cc) {
  var name = e.closest("tr").getElementsByClassName("product-name");
  var input = e.closest("div").querySelector("input");
  var value = parseInt(input.value);
  if (value <= 1 && cc == -1) {
    value = 1;
  } else if (value >= 100 && cc == +1) {
    value = 100;
  } else {
    value += cc;
  }
  input.value = value;
  setCountForItem(name[0].innerText, value);
}
// let minus = document.querySelectorAll(".minus-btn");
// let plus = document.querySelectorAll(".plus-btn");
// for (let i = 0; i < minus.length; i++) {
//   minus[i].addEventListener("click", function (e) {
//     e.preventDefault();
//     var input = this.closest("div").querySelector("input");
//     var value = parseInt(input.value);
//     if (value > 1) {
//       value = value - 1;
//     } else {
//       value = 0;
//     }
//     input.value = value;
//   });
//   plus[i].addEventListener("click", function (e) {
//     e.preventDefault();
//     var input = this.closest("div").querySelector("input");
//     var value = parseInt(input.value);
//     if (value < 100) {
//       value = value + 1;
//     } else {
//       value = 100;
//     }
//     input.value = value;
//   });
// }
