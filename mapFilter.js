const numbers = [4,5,6,7,8,9];
// const squer=[];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const newEle = element * element;
//     squer.push(newEle);
// }
// console.log(squer)

//  map is working like for loop
const result = numbers.map(element=>element * element);
console.log(result);

// filter fill up condition and return element with array

const filterResult = numbers.filter(element => element > 5);
console.log(filterResult);

// find fill up condition but return only the first matching elements without array

const findResult = numbers.find(element => element > 6);
console.log(findResult);

