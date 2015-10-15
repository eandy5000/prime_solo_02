// ! ! !
// Three Bugs

//bug 1. line 28 added array[i] inside CalculateSTI. This makes sure array[i] is replaced with array[i] after its been through CalculateSTI.

//bug 2 changed line 78 return basePercent-1; to return basePercent; -1 was making everything coming out of the switch function negative, 

//bug 3 added Math.round to line 60 and 61. Math.round removes the  



var arrayAtticus = ["Atticus", "2405", "47000", 3];
//console.log(arrayAtticus.length);
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
console.log("array.length "+array.length);
console.log("this is what is in the array "+array);
console.log("this is what is in the array[0] "+array[0]);
console.log("this is what is in the array[0][0] "+array[0][0]);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
  //array[i] = calculateSTI(array);
  //console.log("in our for loop this is i "+i);
  //console.log("This is what is in array[i] "+array[i]);
  //console.log("this is in CalcSTI "+calculateSTI(array));
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}


console.log("array before calculateSTI "+array);

function calculateSTI(array){
  var newArray = [];
//console.log("this is array in calcSTI function "+array);
  newArray[0] = array[0];
  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
//added Math.round to newArray [2] & [3] 
  newArray[1] = bonus;
  newArray[2] = Math.round (baseSalary * (1.0 + bonus));
  newArray[3] = Math.round (baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

//changed line 78 return basePercent-1;
function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
  
}

//this function works
function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}