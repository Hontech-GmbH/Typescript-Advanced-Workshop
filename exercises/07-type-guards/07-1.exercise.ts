/**
 * Call the method swim() if it's a fish and fly() if it's a bird
 * Use the "in" operator for checking
 */

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

function movePet(pet: Bird | Fish): void {
    pet.swim();
    pet.fly();
}

export {}
