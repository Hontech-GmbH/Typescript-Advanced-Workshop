function createSet<T = string>() {
    return new Set<T>();
}

const stringSet = createSet<string>();
const numberSet = createSet<number>();
const otherStringSet = createSet();

export {}
