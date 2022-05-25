// Реализовать функцию indexOfAll.
// Первый аргумент - массив, второй - значение

// Функция возвращает массив со всеми индексами, которые соответствуют переданному значению

// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
// console.log(indexOfAll([1, 2, 3], 4)); -> []

const indexOfAll = (array: any[], value: any): any[] => {
  const answer = [];
  
  array.forEach((item, index) => {
    if(item === value) answer.push(index);
  });

  return answer;
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); // [0, 3]
console.log(indexOfAll([1, 2, 3], 4)); // []
