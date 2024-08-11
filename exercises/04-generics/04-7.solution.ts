

function sum(a: number, b: number): number {
    return a + b;
}

type MyOwnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type TypeScriptSumReturn = ReturnType<typeof sum>;

type MyOwnSumReturn = MyOwnReturnType<typeof sum>; // should give the same output as TypeScriptSumReturn

export {}
