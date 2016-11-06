function solve(args) {
    let a: number = +args[0], b: number = +args[1], c:number = +args[2];

    let biggest: number = a, smallest: number = c;
    let left: number;

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
    if (smallest > b) smallest = b;
    if (smallest > c) smallest = c;

    if ((smallest === a && biggest === b) || (biggest === a && smallest === b)) left = c;
    if ((smallest === a && biggest === c) || (biggest === a && smallest === c)) left = b;
    if (left === undefined) left = a;

    console.log(biggest, left, smallest);
}

solve(['51','23','141'])