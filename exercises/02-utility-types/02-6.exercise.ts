/**
 *  Modify the PersonDisplayInfo to be based on the Person type but only includes the firstname and lastname properties
 */

type Person = {
    id: number;
    firstname: string;
    lastname: string;
    street: string;
    streetNumber: string;
    postalCode: string;
    city: string;
    country: string;
}

type PersonDisplayInfo = Person;

// Valid
const validPersonDisplayInfo: PersonDisplayInfo = {
    firstname: 'Ryan',
    lastname: 'Reynolds'
}

// Invalid
const invalidPersonDisplayInfo: PersonDisplayInfo = {
    firstname: 'Ryan',
    lastname: 'Reynolds',
    country: 'USA'
}

export {}
