function solve(args) {
    var input = +args[0];
    var output = '';
    var v = 1;
    for (var i = 0; i < input; i++) {
        v = 1 + i;
        for (var j = i; j < input + i; j++) {
            output = output.concat(v.toString(), ' ');
            v++;
        }
        output += '\n';
    }
    console.log(output.trim());
}
//# sourceMappingURL=app.js.map