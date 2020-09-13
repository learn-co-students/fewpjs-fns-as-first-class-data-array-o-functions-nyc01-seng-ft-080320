var wakeDog = function wakeDog(dogName, dogBreed) {
    let msg = `Wake ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
  };
  
var leashDog = function leashDog(dogName, dogBreed) {
    let msg = `Leash ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
  };

var walkToPark = function walkToPark(dogName, dogBreed) {
    let msg = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
  };

var throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
  };

var walkHome = function walkHome(dogName, dogBreed) {
    let msg = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
  };

var unleashDog = function unleashDog(dogName, dogBreed) {
    let msg = `Unleash ${dogName} the ${dogBreed}`;
    console.log(msg);
    return msg;
  }

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let array = [];
    for (let i = 0; i < routine.length; i++) {
        let x = routine[i](dogName, dogBreed);
        array.push(x);
    }
    return array;
}