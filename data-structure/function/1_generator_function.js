/**
 * Generator function
 * @param {*} value
 */
function* generator(value) {
  yield value;
  yield value * 10;
  yield value * 100;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

debugger;
