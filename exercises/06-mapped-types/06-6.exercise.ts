/**
 * Create a Mutable type which makes an immutable object mutable
 */

type Mutable<Type> = Type;

type Car = {
    readonly brand: string;
    readonly kilometers: number;
}

const car: Mutable<Car> = {
    brand: 'Ford',
    kilometers: 100_000,
};

// Should work
car.kilometers = 200_000;

export {}
