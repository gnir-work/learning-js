// @flow
/**
 * @fileOverview A stupid file for testing how flow works on regular functions
 */

/**
 * Capitalizes the string given to it and adds a '!' at the end of the text cause capital sentences should always
 * end with a bang!
 * @param text
 * @returns {string}
 */
export function toCaps(text: string) {
    return `${text.toUpperCase()}!`;
}
