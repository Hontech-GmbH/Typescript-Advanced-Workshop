/**
 * Modify the PersonUpdate type so that we don't have to pass the whole Person into the updatePerson function
 * but only the properties of Person that need to be updated
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

type PersonUpdate = Person;

function updatePerson(personUpdate: PersonUpdate): void {
    // some logic to update the given properties of a person
}

const personUpdate: PersonUpdate = {
    lastname: 'Meier'
}

updatePerson(personUpdate);

export {}
