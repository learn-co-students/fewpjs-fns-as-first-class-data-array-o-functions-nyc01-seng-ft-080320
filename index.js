// let routine = [
//     {action: (name, breed) => {console.log(`Walking ${name} the ${breed}`)}},
//     {action: (name, breed) => {console.log(`Leashing ${name} the ${breed}`)}},
//     {action: (name, breed) => {console.log(`Walking ${name} the ${breed} to the park`)}}
// ]

// routine.forEach (({action: fn}) => {
//     fn('appa', 'husky');
// })

// for (let {action: fn} of routine) {
//     fn('appa', 'husky');
// }

// for (let i = 0; i < routine.length; i++) {
//     routine[i].action('appa', 'husky');
    
//     routine[i]['action']('appa', 'husky');  
// }
// let i = 0;
// let letsUseAVar = 'action'
// while (i < routine.length) {
//     routine[i][letsUseAVar]('appa', 'husky'); 
//     i++
// }

let routine2 = [
    {walkDog: (name, breed) => {console.log(`Walking ${name} the ${breed}`)}},
    {leashDog: (name, breed) => {console.log(`Leashing ${name} the ${breed}`)}},
    {parkDog: (name, breed) => {console.log(`Walking ${name} the ${breed} to the park`)}}
]

for (let action of routine2) {
    let key = Object.keys(action)[0];
    action[key]('appa', 'husky');
}