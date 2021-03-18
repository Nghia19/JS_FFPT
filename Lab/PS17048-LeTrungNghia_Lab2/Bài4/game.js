function game(a) {
    let x = 10 + Math.round(5 * Math.random())
    if (a == x) {
        alert('Chúc mừng bạn đã đoán đúng')
    } else if (a > x) {
        alert('Giá trị của bạn lớn hơn số bí mật')
    } else {
        alert('Giá trị của bạn nhỏ hơn số bí mật')
    }
}