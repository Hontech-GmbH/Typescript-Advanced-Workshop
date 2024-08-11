/**
 * Create a type that accepts a size and a type and creates a tuple of the given size containing the given type
 * e.g. CreateTuple<5, string> creates a tuple [string, string, string, string, string];
 */

type CreateTuple<Size, Type> = Type[];

type MyTuple = CreateTuple<5, string>;

// Should Work
const validTuple: MyTuple = ['one', 'two', 'three', 'four', 'five'];

// Should NOT work
const invalidTuple: MyTuple = ['one', 'two', 'three', 'four', 'five', 'Six'];

export {}
