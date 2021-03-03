/**
 * This is the outer function, it will create and return the inner function in order
 * to show how scoping works.
 * @param {int} x some variable
 */
function adder(x) {
    let counter = 1;

    /**
     * The inner function is created inside the scope of adder.
     * Because of that it will save under [[Scopes]] the global scope as well as the adder closure.
     * If you look closely you will see that inner is referencing X, which is created in the outer lexical scope (adder scope).
     * Therefor javascript saves the scope inside the inner function.
     * 
     * closure as shown in console.dir -> Closure (adder) {x: 10}
     */
    return function inner(y) {
        console.log(`Function inner was called ${counter} times!`);
        counter++;
        return x + y;
    };
}

add10 = adder(10);
add5 = adder(5);

console.log(add10(5));
console.log(add10(7));

console.log(add5(5))

// Run in debug in order to see output.
console.log("dir on add10");
console.dir(add10);

console.log("dir on add5");
console.dir(add5);