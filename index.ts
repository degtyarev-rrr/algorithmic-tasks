// Написать функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов и числовых цифр, которые встречаются во входной строке более одного раза. Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и цифры.

// Примеры
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const countRepeats = (str: string): number => {
  let counter = 0;
  const tempStr = str.toLowerCase();
  const obj = {};

  for(let i = 0; i < tempStr.length; i++) {
    if(!obj[tempStr[i]]) {
      obj[tempStr[i]] = 1;
    } else if(obj[tempStr[i]] === 1) {
      counter++;
      obj[tempStr[i]]++;
    } else {
      obj[tempStr[i]]++;
    }
  }

  return counter;
}  

console.log(countRepeats("abcde")); // 0 # no characters repeats more than once
console.log(countRepeats("aabbcde")); // 2 # 'a' and 'b'
console.log(countRepeats("aabBcde")); // 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(countRepeats("indivisibility")); // 1 # 'i' occurs six times
console.log(countRepeats("Indivisibilities")); // 2 # 'i' occurs seven times and 's' occurs twice
console.log(countRepeats("aA11")); // 2 # 'a' and '1'
console.log(countRepeats("ABBA")); // 2 # 'A' and 'B' each occur twice