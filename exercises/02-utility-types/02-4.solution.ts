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

type ResolvedType = Awaited<LoadPersonType>;

// Should work
const resolvedType: ResolvedType = {
    id: 1,
    firstname: 'Eric',
    lastname: 'Clapton'
}

export {}
