// Дана строка. Вернуть длину самого короткого слова
// Пример:
// getLengthOfShortestWord(‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.’) 	// => 2

const getLengthOfShortestWord = (str: string): number => {
  let minLength = str.length;
  let currentLength = str.length;

  for(let i = 0; i < str.length; i++) {
    if(',.!? '.indexOf(str[i]) === -1) {
      currentLength++;
    } else {
      if(currentLength === 0) continue;

      minLength = Math.min(minLength, currentLength);
      currentLength = 0;
    }
  }

  return minLength;
}

console.log(getLengthOfShortestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')); 	// => 2
