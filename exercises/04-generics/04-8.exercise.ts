/**
 * Create a type that returns the type of a curried function
 * It works similar to TypeScripts Awaited Type for Promises
 */

// Create a NestedReturnType type similar to the Awaited type
// type PromiseType = Awaited<Promise<Promise<Promise<string>>>>

type Curry = () => () => () => () => () => number;

type NestedReturnType<T> = T;

// Should be type number
type CurryReturnType = NestedReturnType<Curry>;

export {}
