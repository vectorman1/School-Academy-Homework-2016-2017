function solve(args) {
    let a: number = +args[0];
    let b: number = +args[1];

    if (a > b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
    }
    console.log(a, b);
}