const car = {
    brand: 'Porsche',
    kilometers: 123
} as const;

const porscheBrand: 'Porsche' = car.brand;

export {}
