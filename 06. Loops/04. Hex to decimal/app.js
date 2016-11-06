function solve(args) {
    var hexes = '0123456789ABCDEF';
    var num = args[0].toUpperCase();
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        var n = hexes.indexOf(num[i]);
        sum = n + sum * 16;
    }
    console.log(sum);
}
//# sourceMappingURL=app.js.map