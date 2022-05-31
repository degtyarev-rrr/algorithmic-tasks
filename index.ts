// Создать функцию с именем divisors / Divisors, которая принимает целое число n> 1 и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего до наибольшего. Если число простое, вернуть строку '(integer) is prime'.

// Примеры:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

const divisors = (num: number): number[] | string => {
  const answer = [];
  
  for (let i = 2; i < num; i++) {
    if(!(num % i)) answer.push(i);
  }

  if(!answer.length) return `${num} is prime`;

  return answer;
}

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"