type DeepImmutable<Type> = {
    readonly [Property in keyof Type]: Type[Property] extends object ? DeepImmutable<Type[Property]> : Type[Property];
};

type Car = {
    brand: string;
    kilometers: number;
    audio: {
        brand: string,
        speakers: number
    }
}

const car: DeepImmutable<Car> = {
    brand: 'Ford',
    kilometers: 100_000,
    audio: {
        brand: 'Bose',
        speakers: 5
    }
};

// Should NOT work
car.kilometers = 200_000;

// Should NOT work
car.audio.brand = 'B&O';

export {}
