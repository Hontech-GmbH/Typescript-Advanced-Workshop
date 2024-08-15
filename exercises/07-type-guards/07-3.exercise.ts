/**
 * Create an isFish TypeGuard to check whether the Pet is a fish or not
 */

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

function isFish(pet: Fish | Bird): boolean {
    return true;
}

function movePet(pet: Fish | Bird): void {
    if (isFish(pet)) {
        pet.swim();
    }
}

export {}
