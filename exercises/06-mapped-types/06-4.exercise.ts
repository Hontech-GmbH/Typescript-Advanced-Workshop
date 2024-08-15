/**
 * Create your own implementation of the Required Utility Type (all properties required)
 */

type MyOwnRequired<Type> = Required<Type>;

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
