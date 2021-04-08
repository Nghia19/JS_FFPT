function clock() {
  var timer = new Date();
  var hour = timer.getHours();
  var minute = timer.getMinutes();
  var second = timer.getSeconds();
  document.getElementById("clock").innerHTML =
    checkTime(hour) + ":" + checkTime(minute) + ":" + checkTime(second);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval("clock()", 1000);
