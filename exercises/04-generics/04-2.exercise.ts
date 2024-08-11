/**
 * Modify the createSet function so that I can specify what type of set should be created.
 * If nothing is specified create a set of type unknown
 */

function createSet() {
    return new Set();
}

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const unknownSet = createSet();

export {}
