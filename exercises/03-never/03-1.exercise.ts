/**
 * Create a Union type than can be either exactly a Circle or a Square.
 * Overlapping properties are not allowed
 */

type ShapeBase = {
    color: string;
    area: number;
}

type Square = ShapeBase & {
    sideLength: number;
}

type Circle = ShapeBase & {
    radius: number;
}

type Shape = Square | Circle;

// This should be INVALID
const invalidShape: Shape = {
    color: 'blue',
    area: 25,
    sideLength: 5,
    radius: 10
}

// Valid Circle
const validCircle: Shape = {
    color: 'blue',
    area: 25,
    radius: 10
}

// Valid Square
const validSquare: Shape = {
    color: 'blue',
    area: 25,
    sideLength: 10
}

export {}
