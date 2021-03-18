let myWindow
function new_window() {
    function isIE() {
        ua = navigator.userAgent;
        /* MSIE used to detect old browsers and Trident used to newer ones*/
        var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

        return is_ie;
    }
    /* Create an alert to show if the browser is IE or not */
    if (isIE()) {
        myWindow = window.open("", "",
            "menubar=yes, toolbar=yes, width = 100, height = 100")
    } else {
        myWindow = window.open("", "",
            "menubar=yes, toolbar=yes, width = 150, height = 150")
    }
}

function close_window() {
    if (myWindow) {
        myWindow.close();
    }
}

function check_window() {
    if (myWindow.closed) {
        alert("Cửa sổ mới đã đóng");
    } else {
        alert("Cửa sổ mới chưa đóng");
    }
}