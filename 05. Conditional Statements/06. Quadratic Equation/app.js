function solve(args) {
    var D, a, b, c;
    var output, root, fRoot, sRoot, formatOutput;
    a = +args[0];
    b = +args[1];
    c = +args[2];
    D = (b * b) - (4 * a * c);
    if (D < 0) {
        output = "no real roots";
    }
    else if (D === 0) {
        root = -b / (2 * a);
        var rootOutput = root.toFixed(2);
        output = "x1=x2=" + rootOutput;
    }
    else {
        fRoot = ((-b + Math.sqrt(D)) / (2 * a));
        sRoot = ((-b - Math.sqrt(D)) / (2 * a));
        var fRootOutput = fRoot.toFixed(2);
        var sRootOutput = sRoot.toFixed(2);
        if (fRoot < sRoot) {
            output = "x1=" + fRootOutput + "; x2=" + sRootOutput;
        }
        else {
            output = "x1=" + sRootOutput + "; x2=" + fRootOutput;
        }
    }
    console.log(output);
}
solve([-0.5, 4, -6]);
//# sourceMappingURL=app.js.map