function addOne(x) {
    return x + 1;   
}

function pipe(num, ...args) {
    for (let i = 0; i < args.length; i++) {
        num = args[i](num);
    }
    return num;
}


pipe(1, addOne);
pipe(1, addOne, addOne);
