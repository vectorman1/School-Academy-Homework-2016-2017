function solve(args) {
    let a: number = +args[0], b: number = +args[1], c: number = +args[2];
    let biggest: number = a;
    
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