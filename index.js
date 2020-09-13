function wakeDog(dogName, dogBreed) {
    let output = `Wake ${dogName} the ${dogBreed}`;
    return output;
  }

  function leashDog(dogName, dogBreed) {
    let output = `Leash ${dogName} the ${dogBreed}`;
    return output;
  }

  function walkToPark(dogName, dogBreed) {
    let output = `Walk to the park with ${dogName} the ${dogBreed}`;
    return output;
  }

  function throwFrisbee(dogName, dogBreed) {
    let output = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return output;
  }

  function walkHome(dogName, dogBreed) {
    let output = `Walk home with ${dogName} the ${dogBreed}`;
    return output;
  }

  function unleashDog(dogName, dogBreed) {
    let output = `Unleash ${dogName} the ${dogBreed}`;
    return output;
  }
  
  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
  
  function exerciseDog(dogName, dogBreed) {
    let result = []
    for(let i=0; i < routine.length; i++){
      result.push(routine[i](dogName, dogBreed));
    }
    return result;
  }