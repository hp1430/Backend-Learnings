function operation(add, a, b)
{
    return add(a, b)
}

function add(a, b)
{
    return a+b;
}

let result=operation(add, 5, 6)
console.log(result)