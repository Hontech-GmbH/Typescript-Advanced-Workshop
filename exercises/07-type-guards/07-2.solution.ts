/**
 * Call the method swim() if it's a fish and fly() if it's a bird
 * Use property accessors to check -> if (pet.fly) pet.fly()
 */

type Bird = {
    fly: () => void
}

type Fish = {
    swim: () => void
}

function movePet(pet: Bird | Fish): void {
    const bird = pet as Bird;
    const fish = pet as Fish;

    if (bird.fly) {
        bird.fly();
    }
    
    if (fish.swim) {
        fish.swim()
    }
}

export {}
