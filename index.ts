// Функция принимает 2 массива, и возвращает массив объединенных значений,
// без дублирования

// console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
// console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]

const union = (firstArray: any[], secondArray: any[]): any[] => {
  const unionArray = firstArray.concat(secondArray);
  const set = new Set(unionArray);

  return Array.from(set);
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); // [5, 1, 2, 3, 4]
console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); // [5, 1, 3, 4]
