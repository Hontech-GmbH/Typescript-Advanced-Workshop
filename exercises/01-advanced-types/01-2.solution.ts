type Circle = {
    kind: 'circle';
    radius: number;
};

type Square = {
    kind: 'square';
    side: number;
};

function getArea(shape: Circle | Square): number {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    } else {
        return shape.side * shape.side
    }
}

console.log(getArea({ kind: 'circle', radius: 10 })); // Output: 314.16
console.log(getArea({ kind: 'square', side: 5 }));    // Output: 25

export {}
