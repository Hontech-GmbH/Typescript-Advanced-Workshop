type Person = {
    id: number;
    firstname: string;
    lastname: string;
    country?: string;
}

type RequiredPerson = Required<Person>;

function updatePerson(requiredPerson: RequiredPerson): void {
    // some logic
}

// Should NOT work since we're missing "country"
const personUpdate: RequiredPerson = {
    id: 1,
    firstname: 'Paul',
    lastname: 'McCartney'
}

updatePerson(personUpdate);

export {}
