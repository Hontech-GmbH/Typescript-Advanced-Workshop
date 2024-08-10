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

type PersonUpdate = Partial<Person>;

function updatePerson(personUpdate: PersonUpdate): void {
    // some logic to update the given properties of a person
}

const personUpdate: PersonUpdate = {
    lastname: 'Meier'
}

updatePerson(personUpdate);

export {}
