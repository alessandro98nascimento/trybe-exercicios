//02
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1){
    for(let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1){
    if(numbers[index] > numbers[indexNumber]){
      let guardaNum = numbers[index];
      numbers[index] = numbers[indexNumber];
      numbers[indexNumber] = guardaNum;
    }
    }     
}
console.log(numbers);