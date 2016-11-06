function solve(args) {
    var a = +args[0], b = +args[1], c = +args[2];
    var biggest = a, smallest = c;
    var left;
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
    smallest = a;
    if (smallest > b)
        smallest = b;
    if (smallest > c)
        smallest = c;
    if ((smallest === a && biggest === b) || (biggest === a && smallest === b))
        left = c;
    if ((smallest === a && biggest === c) || (biggest === a && smallest === c))
        left = b;
    if (left === undefined)
        left = a;
    console.log(biggest, left, smallest);
}
//# sourceMappingURL=app.js.map