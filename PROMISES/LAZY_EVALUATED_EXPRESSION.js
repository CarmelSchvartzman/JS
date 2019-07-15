//////  mechanism for lazy evaluation and deferring a computation :

////   arrow function with no arguments: f = () => expression to create the lazily-evaluated expression, and f() to evaluate : 


var f = () => {expression}


f()         <<<<<<<<<<<<<<<<<<<<<<      evaluate



