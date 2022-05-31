// Функция принимает 2 массива, и возвращает массив объединенных значений,
// без дублирования

// console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
// console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]

const union = (firstArray: any[], secondArray: any[]): any[] => {
  const unionArray = firstArray.concat(secondArray);
  const unionSet = new Set();
  const answer = [];

  unionArray.forEach(item => {
    if(!unionSet.has(item)) {
      answer.push(item);
      unionSet.add(item);
    }
  });

  return answer;
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); // [5, 1, 2, 3, 4]
console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); // [5, 1, 3, 4]
