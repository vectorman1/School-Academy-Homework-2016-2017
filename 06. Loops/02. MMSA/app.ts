function solve(args) {
    let average:number, min: number, max: number, sum: number;

    min = +args[0];
    max = +args[0];
    sum = 0;
    average = 0;

    for (let i: number = 0; i < args.length; i++) {
        if (+args[i] < min) {
            min = +args[i];
        }
        if (+args[i] > max) {
            max = +args[i];
        }
        sum += +args[i];
    }
    average = sum / args.length;

    console.log(`min=${min.toFixed(2)}`);
    console.log(`max=${max.toFixed(2)}`);
    console.log(`sum=${sum.toFixed(2)}`);
    console.log(`avg=${average.toFixed(2)}`);  
}
