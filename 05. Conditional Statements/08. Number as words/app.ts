function solve(args) {
    let target:number = +args[0];
    let output:number[] = [];
    for (let i:number = 1; i <= target; i++) {
        output.push(i);
    }
    console.log(output.join(" "));
}