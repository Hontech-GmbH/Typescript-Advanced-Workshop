/**
 * Modify the type NoEmptyString so that it only accepts strings that are not empty
 */

type NoEmptyString<T> = T ;

function noEmptyStringFunction<T extends string>(value: NoEmptyString<T>): number {
    if (!value.length) {
        throw new Error('Value is empty');
    }

    return value.length;
}

// Should work
noEmptyStringFunction('Hello');

// Should NOT work
noEmptyStringFunction('');

export {}
