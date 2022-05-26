// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str: string): string => {
  return str.split('-').map((item, index) => {
    if(index > 0) return item[0].toUpperCase() + item.slice(1)

    return item;  
  }).join('');
}

console.log(camelize("background-color")); // 'backgroundColor')
console.log(camelize("list-style-image")); // 'listStyleImage')
console.log(camelize("-webkit-transition")); //'WebkitTransition')