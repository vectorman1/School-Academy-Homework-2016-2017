function solve(args) {
    let biggest: number = args[0];
    for(let i: number = 0; i < 5; i++) {
        if (+args[i] > biggest)
            biggest = args[i];
    }
    console.log(biggest);
}
