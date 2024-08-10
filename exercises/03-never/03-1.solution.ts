type ShapeBase = {
    color: string;
    area: number;
}

type Square = ShapeBase & {
    sideLength: number;
    radius? : never;
}

type Circle = ShapeBase & {
    radius: number;
    sideLength?: never
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
