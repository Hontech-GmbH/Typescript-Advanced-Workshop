function createSet<T>(): Set<T> {
    return new Set<T>();
}

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

export {}
