/**
 *  Modify the PersonAddress to be based on the Person type but without the firstname and lastname properties
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

type PersonDisplayInfo = Omit<Person, 'firstname' | 'lastname'>;

// Valid
const validPersonDisplayInfo: PersonDisplayInfo = {
    id: 1,
    street: 'Washingtonstreet',
    streetNumber: '123',
    postalCode: '90047',
    city: 'Long Beach, LA',
    country: 'USA'
}

// Invalid
const invalidPersonDisplayInfo: PersonDisplayInfo = {
    id: 1,
    firstname: 'Ryan',
    lastname: 'Reynolds',
    street: 'Washingtonstreet',
    streetNumber: '123',
    postalCode: '90047',
    city: 'Long Beach, LA',
    country: 'USA'
}

export {}
