/**
 * Call the method swim() if it's a fish and fly() if it's a bird
 * Use property accessor check -> if (pet.fly) pet.fly()
 */

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

function movePet(pet: Bird | Fish): void {
    if (pet.fly) {
        pet.fly();
    }

    if (pet.swim) {
        pet.swim()
    }
}

export {}
