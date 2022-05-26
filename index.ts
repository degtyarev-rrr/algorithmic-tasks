// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми словами из X и более букв (X — второй параметр ф-ии).. Переданные строки будут состоять только из букв и пробелов.

// Examples:
// spinWords( "Hey fellow warriors", 5 ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test", 10) => returns "This is a test"
// spinWords( "This is another test", 3 )=> returns "sihT is rehtona tset"

const spinWords = (str: string, x: number): string => {
  return str.split(' ').map(item => {
    if(item.length >= x) {
      return item.split('').reverse().join('');
    }

    return item;
  }).join(' ');
}

console.log(spinWords("Hey fellow warriors", 5)) // "Hey wollef sroirraw"
console.log(spinWords("This is a test", 10)) // "This is a test"
console.log(spinWords("This is another test", 3)) // "sihT is rehtona tset"