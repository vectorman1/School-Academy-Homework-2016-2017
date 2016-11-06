function solve(args) {
    var a = +args[0], b = +args[1], c = +args[2];
    var biggest = a;
    if (b > biggest) {
        if (b > c) {
            biggest = b;
        }
        else {
            biggest = c;
        }
    }
    else {
        if (c > a) {
            biggest = c;
        }
    }
    console.log(biggest);
}
//# sourceMappingURL=app.js.map