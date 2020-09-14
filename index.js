function wakeDog(dogName, dogBreed) {
  const wakey = `Wake ${dogName} the ${dogBreed}`;
  console.log(wakey);
  return wakey;
}

function leashDog(dogName, dogBreed) {
  const leash = `Leash ${dogName} the ${dogBreed}`;
  console.log(leash);
  return leash;
}

function walkToPark(dogName, dogBreed) {
  const walkies = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(walkies);
  return walkies;
}

function throwFrisbee(dogName, dogBreed) {
  const frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(frisbee);
  return frisbee;
}

function walkHome(dogName, dogBreed) {
  const homeward = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(homeward);
  return homeward;
}

function unleashDog(dogName, dogBreed) {
  const unleashed = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleashed);
  return unleashed;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
  return routine.map(fn => fn(dogName, dogBreed));
}