/**
 * @fileoverview The file contains Basic mock functions of functions that contain async logic such as accessing a
 * DB or calling a REST API.
 * These functions are used in the {@link Timer} React component when demonstrating the different ways js
 * has to offer when handling async code
 */

/**
 * A basic implementation of a function which runs async code and expects to be used with callback syntax
 * @param onSuccess The callback that should be called if the async code succeeded
 * @param onError The callback that should be called if the async code failed
 */
export function getCurrentTimeCallBackSyntax(onSuccess, onError) {
    // Get the current 'global' time from an API
    setTimeout(function () {
        const didSucceed = Math.random() >= 0.5;
        didSucceed ? onSuccess(new Date()) : onError('Callback: Random Error');
    }, 2000);
}

/**
 * A basic implementation of a function which runs async code and expects to be used with promise syntax.
 * Please note that in this syntax there is no need to pass callbacks to the function which makes it a lot cleaner
 * and easier to read, however this function returns a Promise object which needs to handled at the calling function.
 * @returns {Promise}
 */
export function getCurrentTimePromiseSyntax() {
    // Get the current 'global' time from an API
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const didSucceed = Math.random() >= 0.5;
            didSucceed ? resolve(new Date()) : reject('Promise: Random Error');
        }, 2000);
    });
}

/**
 * Because await and async are just syntax sugaring over promises the implementing function is the same as in the
 * promise syntax.
 * @returns {Promise}
 */
export function getCurrentTimeAwaitSyntax() {
    // Get the current 'global' time from an API
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const didSucceed = Math.random() >= 0.5;
            didSucceed ? resolve(new Date()) : reject('Await: Random Error');
        }, 2000);
    });
}
