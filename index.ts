// Дана строка. Вернуть длину самого короткого слова
// Пример:
// getLengthOfShortestWord(‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.’) 	// => 2

const getLengthOfShortestWord = (str: string): number => {
  let currentLength = str.length;

  return str.split('').reduce((minLength, item) => {
    if(!(',.!? '.includes(item))) {
      currentLength++;
      return minLength;
    } else {
      if(!currentLength) return minLength;

      minLength = Math.min(minLength, currentLength);
      currentLength = 0;
      return minLength;
    }
  }, str.length)
}

console.log(getLengthOfShortestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')); 	// => 2
