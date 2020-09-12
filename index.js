function wakeDog(dogName, dogBreed){
    const saying = `Wake ${dogName} the ${dogBreed}`
    console.log(saying)
    return saying
}

function leashDog(dogName, dogBreed){
    const saying = `Leash ${dogName} the ${dogBreed}`
    console.log(saying)
    return saying
}

function walkToPark(dogName, dogBreed){
    const saying = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(saying)
    return saying
}

function throwFrisbee(dogName, dogBreed){
    const saying = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(saying)
    return saying
}

function walkHome(dogName, dogBreed){
    const saying = `Walk home with ${dogName} the ${dogBreed}`
    console.log(saying)
    return saying
}

function unleashDog(dogName, dogBreed){
    const saying = `Unleash ${dogName} the ${dogBreed}`
    console.log(saying)
    return saying
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed){
    const arr = []
    for (let i = 0; i < routine.length; i++){
       arr.push(routine[i](dogName, dogBreed))
    }
    return arr
}
