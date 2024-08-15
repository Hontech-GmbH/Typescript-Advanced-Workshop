type Immutable<Type> = {
    readonly [Property in keyof Type]: Type[Property];
};

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
