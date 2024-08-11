const curryFn = <T>(t: T) => <U>(u: U) => <V>(v: V) => ({
    t, u, v
});

const result = curryFn(1)(2)(3);

export {}
