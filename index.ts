// Вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.

// Примеры:
// getMiddle("test") 	// should return "es"
// getMiddle("testing") 	// should return "t"
// getMiddle("middle") 	// should return "dd"
// getMiddle("A") 	// should return "A"

const getMiddle = (str: string): string => {
  if(!(str.length % 2)) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }

  return str[Math.floor(str.length / 2)]
}

console.log(getMiddle("test")) 	// should return "es"
console.log(getMiddle("testing")) 	// should return "t"
console.log(getMiddle("middle")) 	// should return "dd"
console.log(getMiddle("A")) 	// should return "A"