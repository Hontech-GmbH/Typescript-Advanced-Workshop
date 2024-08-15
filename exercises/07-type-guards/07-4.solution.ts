function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function getNumberOrStringLength(value: string | number): number {
    return isString(value) ? value.length : value
}

console.log(getNumberOrStringLength('mystring')) // Output: 8
console.log(getNumberOrStringLength(4)) // Output: 4

export {}
