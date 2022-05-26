// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1

const filterRange = (arr: number[], a: number, b: number): number[] => {
  return arr.filter(item => item >= a && item <= b)
}

const arr = [5, 3, 8, 1];
const filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1