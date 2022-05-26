// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

const sumTo = (n: number): number => {
  return n * (n + 1) / 2;
}

console.log(sumTo(100));