type Curry = () => () => () => () => () => number;

type NestedReturnType<T> = T extends (...args: any[]) => infer R ? NestedReturnType<R> : T;

// Should be type number
type CurryReturnType = NestedReturnType<Curry>;

export {}
