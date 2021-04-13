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
      value = 0;
    }
    input.value = value;
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
  });
}
