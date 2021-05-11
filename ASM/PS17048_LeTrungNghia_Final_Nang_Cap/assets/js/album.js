const dots = document.getElementById("list-dot");
let slide = document.getElementById("slide");
let spanDot;
let numberImg = 5;
for (let index = 1; index < numberImg + 1; index++) {
  let createImg = document.createElement("img");
  createImg.classList.add("fade", "item");
  createImg.src = "./assets/img/slider-" + index + ".jpg";
  slide.appendChild(createImg);
}
const slides = document.getElementsByClassName("item");
function listDot() {
  let span = document.createElement("span");
  for (let i = 0; i < numberImg; i++) {
    span.innerHTML = i + 1;
    dots.appendChild(span.cloneNode(true));
  }
  spanDot = dots.querySelectorAll("#list-dot span");
  spanDot[0].classList.add("active");
  for (let index = 0; index < numberImg; index++) {
    spanDot[index].addEventListener("click", function () {
      for (let i = 0; i < numberImg; i++) {
        spanDot[i].classList.remove("active");
      }
      showSlides((slideIndex = index + 1));
      this.classList.add("active");
    });
  }
}
listDot();
let slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}
document.querySelector(".next").addEventListener("click", () => plusSlides(+1));
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
showSlides(slideIndex);
function showSlides(n) {
  let i;
  if (n > numberImg) slideIndex = 1;
  if (n < 1) slideIndex = numberImg;
  for (i = 0; i < numberImg; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  for (i = 0; i < numberImg; i++) {
    spanDot[i].classList.remove("active");
  }
  spanDot[slideIndex - 1].classList.add("active");
}
setInterval(() => plusSlides(+1), 5000);
