type CreateTuple<Size, Type, Acc extends Type[] = []> = Acc['length'] extends Size ? Acc
    : CreateTuple<Size, Type, [...Acc, Type]>

type MyTuple = CreateTuple<5, string>;

// Should Work
const validTuple: MyTuple = ['one', 'two', 'three', 'four', 'five'];

// Should NOT work
const invalidTuple: MyTuple = ['one', 'two', 'three', 'four', 'five', 'Six'];

export {}
