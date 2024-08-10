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

type PersonDisplayInfo = Pick<Person, 'firstname' | 'lastname'>;

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
