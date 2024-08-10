type Person = {
    id: number;
    firstname: string;
    lastname: string;
}

type ImmutablePerson = Readonly<Person>;

const immutablePerson: ImmutablePerson = {
    id: 1,
    firstname: 'Paul',
    lastname: 'McCartney'
}

// Should NOT work
immutablePerson.id = 2;

export {}
