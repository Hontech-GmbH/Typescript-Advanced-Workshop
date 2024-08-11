// Create a UnwrapArray type similar to the Awaited type
type PromiseType = Awaited<Promise<Promise<Promise<string>>>>

type MyArrays = Array<Array<Array<Array<number>>>>;

type UnwrapArray<T> = T extends Array<infer ArrayType> ? UnwrapArray<ArrayType> : T;

// Should return type number;
type UnwrappedArray = UnwrapArray<MyArrays>;

export {}
