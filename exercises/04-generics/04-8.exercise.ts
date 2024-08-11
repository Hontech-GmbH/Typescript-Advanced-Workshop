/**
 * Create a type that returns the content type of nested arrays
 * It works similar to TypeScripts Awaited Type for Promises
 */

// Create a UnwrapArray type similar to the Awaited type
type PromiseType = Awaited<Promise<Promise<Promise<string>>>>

type MyArrays = Array<Array<Array<Array<number>>>>;

type UnwrapArray<T> = T;

// Should return type number;
type UnwrappedArray = UnwrapArray<MyArrays>;

export {}
