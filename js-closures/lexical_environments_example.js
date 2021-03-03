/**
 * A new lexical environment is created because of the use of let.
 * Now we have the following scope chain: global - let scope.
 */
let number = 42;

/**
 * Number is saved in the closure of printNumber,
 * When we access number inside of printNumber the following happens:
 * 1. We check inside of the lexical environment of printNumber, however we cant find number.
 * 2. Because of lexical scoping the parent scope is the let scope which hold the let lexical environment 
 *    and inside of it we find the number variable. 
 */
function printNumber() {
    console.log(number);
}

// Prints 42
printNumber();

/**
 * We change the value of number inside of the let lexical environment, 
 * therefor affecting the environment that printNumber looks to for dereferencing.
 */
number = 40;

// Prints 40
printNumber();
