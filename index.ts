// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// let strings = ['aaa', 'aaa', 'zzz', 'xxx', 'aaa', 'bbb', 'aaa',  'xxx', 'ccc'];

// alert( unique(strings) ); // ['aaa', 'zzz', 'xxx', 'bbb', 'ccc']

const unique = (arr: string[]): string[] => {
  const answer = [];

  arr.forEach(item => {
    if(answer.indexOf(item) === -1) 
      answer.push(item);
  })

  return answer;
} 

const strings = ['aaa', 'aaa', 'zzz', 'xxx', 'aaa', 'bbb', 'aaa',  'xxx', 'ccc'];

console.log(unique(strings)); // ['aaa', 'zzz', 'xxx', 'bbb', 'ccc']
