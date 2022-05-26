// Каррирование
// add(4)(3)(1) => 8

const add = (a:number) => {
  let sum = a;

  const calculate = (b: number) => {
    sum = sum + b;
    return calculate;
  }

  calculate.toString = (): number => {
    return sum;
  }

  return calculate;
}

console.log(+add(4)(3)(1));