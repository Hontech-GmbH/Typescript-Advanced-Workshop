function getLengthOrNumber(value: number | string): number {
    const isString = typeof value === 'string';

    return isString ? value.length : value
}

console.log(getLengthOrNumber(5))        // Output: 5
console.log(getLengthOrNumber("Foo"));    // Output: 3

export {}
