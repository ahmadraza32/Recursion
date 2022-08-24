
function counter(n){
    for(let i=n; i>0; i--){
        console.log(i);
    }
    return 'finish'
}

// counter(20)

// converting above function into recursive function, 
function recursiveCounter(n){
    if(n <= 0) return

    console.log(n);
    return recursiveCounter(n - 1)
}

console.log(recursiveCounter(15));