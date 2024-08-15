type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

function movePet(pet: Bird | Fish): void {
    if ('swim' in pet) {
        pet.swim();
    }

    if ('fly' in pet) {
        pet.fly();
    }
}

export {}
