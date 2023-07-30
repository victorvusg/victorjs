/**
 * Implement promise
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
const asyncFn1 = async () => {
  const callbackFn = () => console.log('This is timeout');

  setTimeout(callbackFn, 3000);
};

// asyncFn1();

const asyncFn2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello there');
    console.log('resolved');
    console.log(asyncFn2);
  }, 300);
});

debugger;

asyncFn2.then((resolve) => console.log(resolve));
