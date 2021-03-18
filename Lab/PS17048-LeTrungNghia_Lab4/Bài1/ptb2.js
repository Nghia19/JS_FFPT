function ptb21(ptb2) {
    let delta = Math.pow(ptb2.b, 2) - 4 * ptb2.a * ptb2.c
            if (delta < 0) {
                document.write('Phương trình vô nghiệm')
            } else if (delta == 0) {
                let n0 = -ptb2.b / (2 * ptb2.a)
                document.write('Phương trình có nghiệm kép:\n' + 'x0: ' + n0)
            } else {
                let n1 = (-ptb2.b + Math.sqrt(delta)) / (2 * ptb2.a)
                let n2 = (-ptb2.b - Math.sqrt(delta)) / (2 * ptb2.a)
                document.write('Phương trình có 2 nghiệm phân biệt:\n' + 'x1: ' + n1 + '\n' + 'x2: ' + n2)
            }
}
