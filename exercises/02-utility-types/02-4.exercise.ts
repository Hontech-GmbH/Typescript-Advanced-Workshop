/**
 *  loadPerson load an object of type Person as Promise.
 *  The function returns a Promise: () => Promise<Person>
 *  LoadPersonType reads the return type of this function, which is Promise<Person>
 *  From the LoadPersonType read the resolved type, which should be Person
 */

type Person = {
    id: number;
    firstname: string;
    lastname: string;
}

function loadPerson(): Promise<Person> {
    return new Promise<Person>(resolve => ({
        id: 1,
        firstname: 'Jimi',
        lastname: 'Hendrix'
    }))
}

type LoadPersonType = ReturnType<typeof loadPerson>

type ResolvedType = LoadPersonType;

// Should work
const resolvedType: ResolvedType = {
    id: 1,
    firstname: 'Eric',
    lastname: 'Clapton'
}

export {}
