var a = null, b = null, o = null;

var bietthuc = "";

function thong_bao() {
    alert('Nhanh lên')
}

var t = setInterval(thong_bao, 10000)

function toan_hang(x) {
    if (a == null) {
        a = x;
    }
    else {
        b = x;
    }

}
function toan_tu(x) {
    o = x;
}

function thuc_hien() {
    clearInterval(t)
    switch (o) {
        case '+':
            var kq = a + b;
            alert('Tổng: ' + kq);
            break;
        case '-':
            var kq = a - b;
            alert('Hiệu: ' + kq);
            break;
        case '*':
            var kq = a * b;
            alert('Tích: ' + kq);
            break;
        case ':':
            var kq = a / b;
            alert('Thương: ' + kq);
            break;

        default:
            alert(o + ' không phải là toán tử');
            break;
    }
    var t = setInterval(thong_bao, 10000);
}
function lam_lai() {
    a = null;
    b = null;
    o = null;
}