function solve(args) {
    var biggest = args[0];
    for (var i = 0; i < 5; i++) {
        if (+args[i] > biggest)
            biggest = args[i];
    }
    console.log(biggest);
}
//# sourceMappingURL=app.js.map