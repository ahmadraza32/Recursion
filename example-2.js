
function sum(n){
    let total = 0
    for(let i=n; i>0; i--){
        console.log(i);
        total += i
    }
    return total
}

// console.log(sum(10));

function recursiveSum(n, total=0){
    if(n <= 0) return total

    return recursiveSum(n-1, total += n)
}

console.log(recursiveSum(10));