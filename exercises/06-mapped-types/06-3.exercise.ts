/**
 * Create your own implementation of the Partial Utility Type (all properties are optional)
 */

type MyOwnPartial<Type> = Partial<Type>;

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
