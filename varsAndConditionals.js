/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Witch King of Angmar.
*/ 

let eowynAttack = 50
let WitchKingAttack = 75

if (eowynAttack > WitchKingAttack){
    console.log('Eowyn is stronger')
}else if(WitchKingAttack > eowynAttack){
    console.log('Witch King is stronger')
}else console.log('They have equal strength')

let eowynHealth = 100
let eowynDefense = 0

if (eowynHealth + eowynDefense <= WitchKingAttack){
    console.log('Eowyn died.')
}else {
eowynHealth = eowynHealth + eowynDefense - WitchKingAttack
console.log(`She is down to ${eowynHealth}.`)}


let coinLandsHeads = true

if (coinLandsHeads){
    console.log('Witch King gets to run away.')
}else 
    console.log('Witch King got stabbed in the face.')


for(let i = 0; i < 5; i++){
    if(eowynHealth > 0 ){
        eowynHealth = eowynHealth - WitchKingAttack
        console.log(`Eowyn has ${eowynHealth} left`)
    }
    else {
        console.log('Eowyn dead')
    }
}

    


// 
// 
// 


while (eowynHealth > 0) {
    eowynHealth -= WitchKingAttack;
console.log(`Eowyn has $(eowynHealth) left`)}