function fozzieBear(){
    console.log(`Wocka Wocka!`);
};

fozzieBear();

console.log(`=============`);

function beaker(speak){
    console.log(`${speak}, ${speak}, ${speak}, ${speak}`);
}

beaker(`Meep`);

console.log(`=============`);

function muppetShow(a,b){
    if(a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}

muppetShow(`Muppet`, `Show`);

console.log(`=============`);

function kermit(){
    return `Kermit The Frog`;
}

console.log(kermit());
console.log(`=============`);

function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }else{
        return false;
    }
}

console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));

console.log(`=============`);

const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}

manOrMuppet();

rainbowConnection = () => (
`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`
)

console.log(rainbowConnection());

console.log(`==============`);

// 8. No

// 9. Yes

// 10 wait till Monday for answers
const newMuppetMovies = [`The Muppets`, `Muppets Most Wanted`];

const upperMovies = newMuppetMovies.map(function(u){
   return u.toUpperCase();
});
console.log(upperMovies);

console.log(`=============`);

// BONUS
// 11a
const oldMuppetMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const twoMovies = oldMuppetMovies.filter(a => a === `The Great Mupprt Caper` || a === `Muppet Treasure Island`);
// OR
// const twoMovies = oldMuppetMovies.filter(a => a.length === 22);
console.log(twoMovies);

console.log(`============`);

// 12a
const charactersOne = [`Statler`, `Waldorf`];

// 12b
const charactersTwo = [`The Swedish Chef`, `Animal`, `Rowlf`]

// 12c
randomMuppet = (characters) => {
    const random = Math.floor(Math.random() * characters.length)
    console.log(characters[random]);
}

// 12d
randomMuppet(charactersOne)
randomMuppet(charactersTwo)

console.log(`===============`);

// 13
caps = string => {
    let newString = ``;
    for (i = 0; i < string.length; i ++){
        if (i % 2 === 0){
            newString += string[i].toUpperCase();
        } else {
            newString += string[i];
        }
    }
    return newString
}
console.log(caps(`hello`)); // HeLlO