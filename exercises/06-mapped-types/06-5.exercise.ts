/**
 * Create an Immutable type which makes an object immutable)
 */

type Immutable<Type> = Type;

type Car = {
    brand: string;
    kilometers: number;
}

const car: Immutable<Car> = {
    brand: 'Ford',
    kilometers: 100_000,
};

// Should NOT work
car.kilometers = 200_000;

export {}
