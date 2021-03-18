function maytinh(a, b, o) {
    switch (o) {
        case '+':
            let kq = a + b
            alert('Tổng: ' + kq)
            break;
        case '-':
            let kq1 = a - b
            alert('Hiệu: ' + kq1)
            break
        case 'x':
            let kq2 = a * b
            alert('Tích: ' + kq2)
            break
        case ':':
            let kq3 = a / b
            alert('Thương: ' + kq3)
            break
        default:
            alert(o + ' không là toán tử')
            break
    }
}