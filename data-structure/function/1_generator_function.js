function* generator(value) {
  yield value;
  yield value * 10;
}

console.log(generator(10));

debugger;
