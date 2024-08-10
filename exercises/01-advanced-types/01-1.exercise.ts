/**
 * Extend the given function to also accept string values
 * If it's a number, return the number
 * If it's a string return the length of the string
 *
 * Tip: use typeof to determine if the given value is a string or not
 */

function getLengthOrNumber(value: number): number {
    return value;
}

console.log(getLengthOrNumber(5))        // Output: 5
console.log(getLengthOrNumber("Foo"));    // Output: 3

export {}
