let images = [];
for (let i = 0; i < 6; i++) {
  images[i] = new Image();
  images[i].src = "./img/" + i + ".JPG";
}
let getImg = document.getElementById("anh");
let setImg = 0;
function firstImg() {
  getImg.src = images[(setImg = 0)].src;
}
function prevImg() {
  if (setImg == 0) {
    setImg = images.length;
  }
  getImg.src = images[(setImg -= 1)].src;
}
function nextImg() {
  if (setImg == images.length - 1) {
    setImg = -1;
  }
  getImg.src = images[(setImg += 1)].src;
}
function lastImg() {
  getImg.src = images[(setImg = images.length - 1)].src;
}
