/**
 * Modify the ImmutablePerson type so that we cannot change the properties after creating the object.
 */

type Person = {
    id: number;
    firstname: string;
    lastname: string;
}

type ImmutablePerson = Person;

const immutablePerson: ImmutablePerson = {
    id: 1,
    firstname: 'Paul',
    lastname: 'McCartney'
}

// Should NOT work
immutablePerson.id = 2;

export {}
