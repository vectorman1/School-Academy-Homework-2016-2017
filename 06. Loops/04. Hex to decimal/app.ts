function solve(args) {
    let hexes:string = '0123456789ABCDEF';

    let num:string = args[0].toUpperCase();
    let sum:number = 0;

    for (let i: number = 0; i < num.length; i++) {
        let n:number = hexes.indexOf(num[i]);
        sum = n + sum * 16;
    }
    console.log(sum);
}