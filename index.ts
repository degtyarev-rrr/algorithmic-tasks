// Написать функцию persistence, которая принимает положительный параметр num и возвращает число, которое нужно умножить цифры в num, пока не дойдете до единственной цифры.

// Примеры:
//  persistence(39) === 3 	because 3*9 = 27, 2*7 = 14, 1*4=4
//                        			and 4 has only one digit

//  persistence(999) === 4 	 because 9*9*9 = 729, 7*2*9 = 126,
//                         		 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 		 because 4 is already a one-digit number

const persistence = (num: number): number => {
  if(num < 10) return 0;
  
  let counter = 1;
  let multiplication = findMultiplication(num);

  while (multiplication > 10) {
    multiplication = findMultiplication(multiplication);
    counter++;
  }

  return counter;
}

const findMultiplication = (num: number): number => {
  return +num.toString().split('').reduce((acc, item) => { 
    return acc * +item;
  }, 1);
}

console.log(persistence(39)) // 3 	
console.log(persistence(999)) // 4 	
console.log(persistence(4)) // 0 		