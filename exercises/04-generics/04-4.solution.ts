type Car = {
    brand: string,
    kilometers: number;
}

type Person = {
    id: number,
    name: string;
}

function getPersonOrCar<T extends string | number>(searchValue: T): T extends string ? Car : Person{
    throw "unimplemented"
}

getPersonOrCar('Ford'); // Return type should be Car

getPersonOrCar(123); // Return type should be Person

export {}
