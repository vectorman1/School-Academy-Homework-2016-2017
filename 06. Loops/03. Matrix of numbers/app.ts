function solve(args) {
    let input: number = +args[0];
    let output: string = '';
    let v:number = 1;

    for (let i: number = 0; i < input; i++) {
        v = 1 + i;
        for (let j: number = i; j < input + i; j++) {
            output = output.concat(v.toString(), ' ');
            v ++;
        }
        output += '\n';
    }
    console.log(output.trim());    
}