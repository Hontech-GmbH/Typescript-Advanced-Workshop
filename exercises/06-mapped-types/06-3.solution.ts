type MyOwnPartial<Type> = {
    [Property in keyof Type]?: Type[Property]
};

type Car = {
    brand: string;
    kilometers: number
}

const car: Car = {
    brand: 'Ford',
    kilometers: 100_000
};

const partialCar: MyOwnPartial<Car> = {
    brand: 'Mercedes'
};


export {}
