function solve(args) {

    let isPositive: boolean = true;

    var sign = '0';

    for (let i: number = 0; i < 3; i++) {
        let n:number = +args[i];

        if (n !== 0) {
            if (n < 0) {
                isPositive = !isPositive;
            }

            sign = isPositive ? '+' : '-';
        }
        else {
            sign = '0';
            break;
        }
    }

    console.log(sign);
    

}

solve([5, 2, 2]);

