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

untilNum(5);

function multiply (num1, num2){
   return num1 * num2}
   console.log (multiply(2,2))
   
   function add (num1, num2){
           if ( num1 === num2 ){
               return (num1 + num2)*(3)
           } else{
               return num1 + num2
           }
       
   } 
   console.log(add(2, 2))
 
 function isNegative (num){
     if (num > 0){
         return true
     }else {
        return false
         
     }
 }
 
 console.log(isNegative(-3));
 
 
 function triangleArea (height, base){
   return  (height * base)/ 2
     
 }
 console.log (triangleArea(2,3));
 
 function betweenTwentyAndForty(num){
     if(num >= 20 && num <= 40){
         return true;
     } else{
         return false;
     }
 } 
 console.log(betweenTwentyAndForty(33))
 
 function largest(a,b,c){
     if(a > b && a > c){
         return a;
     } else if ( b > a && b >c){
         return b;
     } else {
         return c
     }
     
 }
 console.log(largest(2, 5, 10))
 
 function printTime (){
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

return time;
 }
 
 console.log(printTime());
 
 function isLeapYears(year){
     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
 }
 console.log(isLeapYears(2000))