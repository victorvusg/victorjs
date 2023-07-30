const basicMap = new Map();

basicMap.set('hello there', 'Victor');

basicMap.set('hi', 'Tomi');

// console.log(basicMap[Symbol.iterator]);

// console.log(basicMap.entries);

basicMap.forEach((value, key) => {
  console.log(value);
  console.log(key);
});
