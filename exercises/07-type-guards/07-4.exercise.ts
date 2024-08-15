/**
 * Implement the function getNumberOrStringLength, with the usage of TypeGuards,
 * to return the number if the type of value is a number.
 * Otherwise, return the length of the string
 */

function getNumberOrStringLength(value: string | number): number {
    throw "Unimplemented"
}

console.log(getNumberOrStringLength('mystring')) // Output: 8
console.log(getNumberOrStringLength(4)) // Output: 4

export {}
