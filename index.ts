// Возвести в квадрат каждую цифру числа и соединить их.
// Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 92 - это 81, а 12 - 1.
// Примечание: функция принимает целое число и возвращает целое число.

const square = (x: number): number => {
  let answer = x.toString();

  answer = answer.split('').map(item => +item * +item).join('');
  
  return +answer;
}

console.log(square(9119));