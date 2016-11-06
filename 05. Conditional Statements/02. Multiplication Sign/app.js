function solve(args) {
    var isPositive = true;
    var sign = '0';
    for (var i = 0; i < 3; i++) {
        var n = +args[i];
        if (n !== 0) {
            if (n < 0) {
                isPositive = !isPositive;
            }
            sign = isPositive ? '+' : '-';
        }
        else {
            sign = '0';
            break;
        }
    }
    console.log(sign);
}
//# sourceMappingURL=1.js.map