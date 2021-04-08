let openedWindow;
function openWindow() {
  let width, height;
  if (navigator.appCodeName == "IE") {
    width = 400;
    height = 400;
  } else {
    width = 500;
    height = 500;
  }
  openedWindow = window.open(
    "https://google.com",
    "_blank",
    "toolbar=yes,menubar=yes,width=" + width + ",height=" + height + ""
  );
}
function closeOpenedWindow() {
  openedWindow.close();
}
function checkOpenedWindow() {
  if (openedWindow.closed == true) {
    alert("Cửa sổ đã đóng");
  } else {
    alert("Cửa sổ đang mở");
  }
}
