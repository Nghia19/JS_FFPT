let getImg = document.getElementById("anh");
getImg.addEventListener("mouseover", function () {
  getImg.src = "./img/0.jpg";
});
getImg.addEventListener("mouseout", function () {
  getImg.src = "./img/1.jpg";
});
