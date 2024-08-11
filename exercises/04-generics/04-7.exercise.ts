/**
 * Create your own ReturnType Type "MyOwnReturnType" that works just like the provided ReturnType of TypeScript
 * Infer the return type of the function correctly
 * If the given input is not type of function the Type should resolve to "never"
 */

function sum(a: number, b: number): number {
    return a + b;
}

type MyOwnReturnType<T> = T;

type TypeScriptSumReturn = ReturnType<typeof sum>;

type MyOwnSumReturn = MyOwnReturnType<typeof sum>; // should give the same output as TypeScriptSumReturn

export {}
