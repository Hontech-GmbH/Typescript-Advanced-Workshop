type ShapeBase = {
    color: string;
}

type Shape = ShapeBase & ({
    kind: 'square',
    sideLength: number
} | {
    kind: 'round',
    radius: number
})


// Should work
const circle: Shape = {
    color: 'red',
    kind: 'round',
    radius: 10
};

// Should work
const square: Shape = {
    color: 'blue',
    kind: 'square',
    sideLength: 12
}

// Should NOT work
const invalidShape: Shape = {
    color: 'green',
    kind: 'square',
    radius: 20
}

export {}
