//Code your solutions in this file
function fiveToOneHundred (){
    for (let i = 5; i <= 100; i++){
        console.log (i);
    }
    
}
console.log(fiveToOneHundred());

function multiplesOfThree(){
    for (let i = 3; i <= 100; i+=3){
        console.log(i)
    }
}
multiplesOfThree();

function multiplesOfThreeOrFive(){
    for (let i = 3; i <=100; i+=3){
        console.log(i)
    }
    for (let i = 5; i <= 100; i+=5){
        console.log(i)
    }
}
multiplesOfThreeOrFive();

function untilNum(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}
untilNum(5)
