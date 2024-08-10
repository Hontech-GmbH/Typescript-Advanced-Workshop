/**
 * Extend the getArea function to accept Circle shapes and Square shapes
 * Calculate the area of these shapes depending on the type of shape
 * Circle: PI * radius * radius
 * Square: side * side
 *
 * Tip: Use Math.PI for circle area calculations
 */


type Circle = {
    kind: 'circle';
    radius: number;
};

type Square = {
    kind: 'square';
    side: number;
};

function getArea(shape: any): number {
    throw Error("Not Implemented")
}

console.log(getArea({ kind: 'circle', radius: 10 })); // Output: 314.16
console.log(getArea({ kind: 'square', side: 5 }));    // Output: 25

export {}
