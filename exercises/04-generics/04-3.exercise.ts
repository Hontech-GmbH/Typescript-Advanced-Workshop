/**
 * Modify the createSet function so that the default generic is of type string
 */

function createSet<T>(): Set<T> {
    return new Set<T>();
}

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const otherStringSet = createSet(); // Should be of type string

export {}
