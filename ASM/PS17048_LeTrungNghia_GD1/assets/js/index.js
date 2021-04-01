const slides = document.getElementsByClassName("item");
const dots = document.getElementById("list-dot");
var slideIndex = 1;
function plusSlides(n) {
  showSlides((slideIndex += n));
}
document.querySelector(".next").addEventListener("click", function () {
  plusSlides(+1);
});
document.querySelector(".prev").addEventListener("click", function () {
  plusSlides(-1);
});
function listDot() {
  let i;
  for (i = 0; i < slides.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = i + 1;
    dots.appendChild(span);
  }
  let spanDot = document.querySelectorAll("#list-dot span");
  spanDot[0].classList.add("active");
  for (i = 0; i < spanDot.length; i++) {
    spanDot[i].addEventListener("click", function () {
      let activeDot;
      let $this = this;
      for (i = 0; i < spanDot.length; i++) {
        spanDot[i].classList.remove("active");
      }
      for (activeDot = 1; ($this = $this.previousElementSibling); activeDot++);
      showSlides((slideIndex = activeDot));
      this.classList.add("active");
    });
  }
}
listDot();
showSlides(slideIndex);
function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  let spanDot = document.querySelectorAll("#list-dot span");
  for (i = 0; i < spanDot.length; i++) {
    spanDot[i].classList.remove("active");
  }
  spanDot[slideIndex - 1].classList.add("active");
}
