/**
 * Modify the curryFn so that TypeScript can infer the types of the generics U and V correctly
 */

const curryFn = <T, U, V>(t: T) => (u: U) => (v: V) => ({
    t, u, v
});

const result = curryFn(1)(2)(3); // Should return an object of type { t: number, u: number, v: number }

export {}
