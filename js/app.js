'use strict';

var username = prompt('What is your name?');
console.log('userName value', username);

var age = prompt('What is your age?');
console.log('age', age);

var intersets = prompt('What is your interests');
console.log('intersets', intersets);

alert(' hi ' + username + ' your age ' + age + ' you interest in ' + intersets + ' welcome to my web site ')
var score = 0;
// 1////////////////////////////////////
var license = prompt('do you have a driving license?');
var license = getValidation(license);
var license = result(license,'very, good, you must have a driving license','sorry, you cant rent a car without a driving license');

2//////////////////////////////

var typelicense = prompt('do you have an automatic driving license?');
var typelicense = getValidation(typelicense);
typelicense = result(typelicense,'Amazing, you can choose any car','we are sorry we only have automatic cars');

3/////////////////////////////////////////////////////////

var modern = prompt('do you prefer modern cars over old cars?');
var modern = getValidation(modern);
var modern = result (modern,'Thats great, we have a modern cars','we apologize, all old cars are rented at the moment');

4////////////////////////////////////////////////////////////////////

var con = prompt('do you know the conditions of renting a car?');
var con = getValidation(con);
var con = result (con,'Great jop, you know your thing','please read the terms and conditions');


5//////////////////////////////////////////////////////

var service = prompt('do you know the conditions of renting a car?');
var service = getValidation(service);
var service = result (service,'Welcom back, check our new services','Welcome , to our website');


6 //////////////////////////////////////////////////////////////
var game = 12;
var gamenumber = prompt('try a number from 2 to 20 you have 4 try')
var Giss = numberGiss(gamenumber,game)

// 7 ////////////////////////////////////////////////////////

var mycar=['toyota','mazda','honda','porsche','tesla','nissan','kia'];
var myfavcar=prompt('gusse my seven favorite cars?');

var favCarResult = arrayFunction(mycar,myfavcar);
alert(' your score is ' + score);




// validation Function
function getValidation(userInput){

  while (userInput === null || userInput === undefined || userInput === '') {
    alert('please answer');
      userInput = prompt('U have to put an answer?');
  // console.log(license)
  }
  
  while (userInput.toLowerCase() !== 'yes' && userInput.toLowerCase() !== 'no' && userInput.toLowerCase() !== 'y' && userInput.toLowerCase() !== 'n')
  {
      alert('please answer');
        userInput = prompt('U have to put yes / no / y / n?');
    // console.log(license)
    }
    return userInput;
  
}

// Result Function
function result(userResult,massege1,massege2){

 
  if (userResult.toLowerCase() === 'yes' || userResult.toLowerCase() === "y" )  {
    //console.log(userResult.toLowerCase() === 'yes' || userResult.toLowerCase() === 'yes');
    alert(massege1);
    score++;
  }

  else if (userResult.toLowerCase() === "no" || userResult.toLowerCase() === "n"){
    alert(massege2);
  // console.log(license)
  }

}



// Gissing Number Function



function numberGiss(userNumber,myNumber) {
  
var i;
for (i = 1; i <= 4; i++) {
  console.log(userNumber);
  if (userNumber == myNumber) {
    alert('Right its' + myNumber)
    console.log('true');
    score++;
    break;
  }
  else if (userNumber > myNumber) {
    alert('sorry that is too hight you try ' + i + ' time')
    
    console.log('false');
  }
  else if (userNumber < myNumber) {
    alert('sorry that is too low you try ' + i + ' time')
    console.log('false');
  }
 userNumber = prompt('try another time a number from 2 to 20 you have' + i + 'try')
 
if(userNumber == myNumber){
  alert('correct')
  
  break;
}
 if(i==3){
  alert('sorry, The answer is ' + myNumber);
  break; 
}
}
  
}


// Array Function

function arrayFunction(myArrayCar,usercar) {
  var z = 0;
  var car=false;
  
  while(z<=5 && !car){
    usercar=prompt('gusse my seven favorite cars?');
    for(var a = 0; a < myArrayCar.length; a++){
      if(usercar===myArrayCar[a]){
    
        alert('that is correct');

        car=true;
        score++;
        


        break;

      }

  

    }

  
  z++;
}

alert(' the answers is '+ mycar );


  
}