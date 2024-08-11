/**
 * Modify the getPersonOrCar function so that it returns the exact type, not a union
 * If the searchValue is of type string the return value is Car
 * If the searchValue si fo type number the return value is Person
 *
 * Note: You do NOT need to implement the functionality, just the typing
 */

type Car = {
    brand: string,
    kilometers: number;
}

type Person = {
    id: number,
    name: string;
}

function getPersonOrCar(searchValue: string | number): Car | Person {
    throw "unimplemented"
}

getPersonOrCar('Ford'); // Return type should be Car

getPersonOrCar(123); // Return type should be Person

export {}
