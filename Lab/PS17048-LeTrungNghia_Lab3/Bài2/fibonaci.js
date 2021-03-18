function fibonaci(f0, f1) {
    for (var i = 0; i < 10; i++) {
        let f = f0 + f1
        f0 = f1
        f1 = f
        document.write(f + '<br>')
    }
}