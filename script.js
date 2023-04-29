 
 //Kyu 8
 
 // Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = (str) => str.split('').map(c => c + c).join("");


// OR

function doubleChar(str){
    var word = '';
    for(let i=0; i<str.length; i++){
        word = word + str[i] + str[i];
    };
    return word;
}


// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



var a = "";

function fakeBin(x){
  
    for(let i=0; i< x.length; i++){
        if (x[i] >= 5){
            a= a + 0
         } else if(x[i] < 5){
             a = a + 1
         }
     
       }
       return a
  }


  //OR

  function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
} 



// Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


function makeNegative(num) {
  
    var z = 0;
    
    if(num > 0){
        z = - num
     return z
    } else{
      z = num
    return z
    } 
    // Code?
  }


  //OR

  function makeNegative(num) {
    return num <= 0 ? num : -num;
  }




  //Twice as Old

  // Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


  function twiceAsOld(dadYearsOld, sonYearsOld) {
    let n = dadYearsOld - (sonYearsOld * 2);
    return Math.abs(n)
    // your code here
  }



  // Are You Playing Banjo?

  //

  function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

  //OR

  function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
  }
  


  // Will you make it?

  // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 



  

  //OR

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };



  // Abbreviate a Two Word Name

  // Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

  function abbrevName(name){
    const arrayString = name.split(' ');
    const firstName = arrayString[0].toString();
    const lastName = arrayString[1].toString();
    return firstName[0] + lastName[0]
  }

  //OR

  function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

  }







  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  //Kyu 7
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////









  // Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.Testing 1-2-3

  // 

  var number=function(array){
    let num = 0;
    let arrEnd=[];
   
    
    array.forEach (finalArray) 
    
    function finalArray(array) {
      let i = 0;
      num++
      if(array.length === 0){
        arrEnd.push(num +': ')
      } else{
          arrEnd.push(num +': '+array[i]) 
          i++   
      }
    }
  
    return arrEnd
  }

  // OR

  
  var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }



//The highest profit wins!

// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}


//Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.


function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}


//Reverse words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str.split('').reverse().join("").split(' ').reverse().join(' ') // Go for it
   
}



//Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let accX = 0;
  let accO = 0;
  let finalStr = str.toLowerCase();
  for (let i = 0; i< str.length; i++){
     switch(finalStr[i]){
    case 'x':
      accX++
    break;
    case 'o':
    accO++
    break;
    }
  }
  if(accX === accO){
    return true
  } else{
    return false
  }
}


//OR

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}



//Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwo(num){

  const indexX = num.indexOf(Math.min(...num))
  const x = parseInt(num.splice(indexX, 1))
  const indexY = num.indexOf(Math.min(...num))
  const y = parseInt(num.splice(indexY, 1))
  return x + y
  
}


//OR

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};



//Remove the minimum

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

function removeSmallest(numbers) {
  if(numbers != []){
      const minIndex = numbers.indexOf(Math.min(...numbers))
      const newArray = [...numbers];
      newArray.splice(minIndex, 1)
      return newArray
  } else if (numbers === []){
      return []
  }

}


//OR

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}



//Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const combinedString = s1 + s2
  const finalString= Array.from(new Set(combinedString.split('').sort())).toString();
  return finalString.replace(/\,/g, '')
}


//OR

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')



//Number of People in the Bus

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus.

var number = function(busStops){
	var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}



//Disemvowel Trolls

// Write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  return str.replace(/([aeiou])/gi, '');
}



//Two Fighters One Winner

// Create a function that returns the name of the winner in a fight between two fighters.

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

//OR

function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0) {
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
  }
  
  if (fighter1.health <= 0 && fighter2.health <= 0)
    return firstAttacker;
  else if (fighter1.health <= 0)
    return fighter2.name;
  else
    return fighter1.name;
}



//Sum of odd numbers

// Given the triangle of consecutive odd numbers calculate the sum of the numbers in the nth row of this triangle.

function rowSumOddNumbers(n) {
	return n * n * n;
}

//OR

function rowSumOddNumbers(n) {
	return n * n * n;
}



//Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  const numString = n.toString().split('').sort(function(a, b){
    return b - a;
  })
  const finalNum = numString.join('');
  return +finalNum
  }

//OR

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}



//Categorize New Member

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.Output will  consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}


//OR

function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}



//Sort array by string length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

function sortByLength (array) {
  return array.sort(function(a, b) {
    return a.length - b.length
  })
};


//OR

function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length);
};



// Sum of the firts nth term of Series

//our task is to write a function which returns the sum of following series upto nth term.

function SeriesSum(n)
{
  let finalNum = 1
  let a = 4;
  if(n == 0){
    let b = 0
    return b.toFixed(2)
  } 
  for(let i = 1; i < n; i++){
 if(n == 1){
      finalNum += 0
    } else{
    finalNum += 1/a;
    a += 3; 
    } 
  }
  return finalNum.toFixed(2)

}

//OR

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}



// String ends with?

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

function solution(str, ending){
  return str.slice(-ending.length) == ending || ending == '' ? console.log('yes') : console.log('nou')
}

//OR

function solution(str, ending){
  return str.endsWith(ending);
}



// Isograms

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i)
}

//OR

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}







  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  //Kyu 6
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////











// Who likes it?

//Implement the function which takes an array containing the names of people that like an item. 

function likes(names) {
  let answer = '';
  switch(names.length){
    case 0:
      return answer = 'no one likes this';
    case 1:
      return answer = `${names} likes this`;
    case 2:
      return answer = `${names[0]} and ${names[1]} like this`;
    case 3:
      return answer = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return answer = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//OR

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}



// Break camelCase

//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let newArray = []
  for(let i = 0; i < string.length; i++){
    if(string[i] == string[i].toLowerCase()){
      newArray += string[i]
    } else {
      newArray += ' ' + string[i]
    }
  }
  console.log(newArray)
}

//OR

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}



//

//


//
