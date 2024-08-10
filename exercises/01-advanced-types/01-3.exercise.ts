/**
 * Modify the Shape type so that when the kind is "round" only the property "radius" is present
 * If the kind is "square" only the property "sideLength" is present
 * The other property should not be available (not just optional)
 */

type ShapeBase = {
    color: string;
}

type Shape = ShapeBase & {
    kind: 'round' | 'square',
    sideLength?: number;
    radius?: number;
}


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
