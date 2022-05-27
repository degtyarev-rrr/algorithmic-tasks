// Написать ф-ию, которая принимает 3 целочисленных значения a, b, c.
// Ф-ия должна возвращать true, если треугольник можно построить со сторонами заданной длины, и false в любом другом случае.

// Примеры:
// isTriangle(1,2,2)	// true
// isTriangle(7,2,2)	// false

const isTriangle = (a: number, b: number, c: number) : boolean => {
  if((a + b > c) && (a + c > b) && (b + c > a))
    return true;

  return false;
}

console.log(isTriangle(1,2,2))	// true
console.log(isTriangle(7,2,2))	// false