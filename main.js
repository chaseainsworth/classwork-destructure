/*You will probably not have to take destructuring to such a level as this but this is for you 
  to really wrap your brains around the mechanics.
  EVERY EXERCISE SHOULD USE DESTRUCTURING*/


let arr1 = [
  ['name', 'jon'],
  ['age', 20],
  ['eyes', 'blue'],
  ];
 //Create an object out of the arr above then using destructuring, declare variables using the 
//  object keys.

let obj1 = Object.fromEntries(arr1);

const {name: n, age: a, eyes: e} = obj1; //?

console.log(n, a, e);


let arr2 = [1,2,3,4,5,6]
  //a. Set 3 variables names: the third index should be called 'three', the fourth item 'four' and 
  //  the rest of the items thereafter 'rest'
  //b. Swap the third and fourth item variable values

  let newArr = [, , three, four, ...rest] = arr2;

  console.log(three);

  [three, four] = [four, three];

  console.log(three);
  
  console.log(rest);


