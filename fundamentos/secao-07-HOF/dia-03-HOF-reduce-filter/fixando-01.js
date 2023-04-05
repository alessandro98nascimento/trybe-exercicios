const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filterArray = numbers.filter((element) => element % 2 === 0);

const reduceArray = filterArray.reduce((element, element2) => element + element2);


console.log(filterArray);
console.log(reduceArray);