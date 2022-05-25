// Функция принимает 2 массива.
// Возвращает новый массив, который состоит только из тех элементов,
// которые встретились в одном массиве, но не встретились в другом

// console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
// console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']

const findUniques = (firstArray: any[], secondArray: any[]): any[] => {
  const uniques: any[] = [];

  firstArray.forEach(item => {
    const position = secondArray.indexOf(item);

    if(position === -1) {
      uniques.push(item);
    }
  })

  return uniques;
}

const arrayDiff = (firstArray: any[], secondArray: any[]): any[] => {
  const uniquesFromFirstArray = findUniques(firstArray, secondArray);
  const uniquesFromSecondArray = findUniques(secondArray, firstArray);

  return uniquesFromFirstArray.concat(uniquesFromSecondArray);
}

console.log(arrayDiff([1, 2, 3], [1, 2, 4])); // -> [3, 4]
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); // -> [4, '4']
