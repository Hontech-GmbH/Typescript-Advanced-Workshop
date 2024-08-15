type MyOwnRequired<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type Car = {
    brand: string;
    kilometers?: number
}

// Should work
const car: MyOwnRequired<Car> = {
    brand: 'Ford',
    kilometers: 100_000
};

// Should NOT work
const partialCar: MyOwnRequired<Car> = {
    brand: 'Mercedes'
};


export {}
