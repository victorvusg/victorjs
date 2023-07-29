const promise = new Promise((resolve, reject) => {
  //
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) reject(randomNumber);
    else resolve(randomNumber);
  }, 5000);
});

promise
  .then((e) => console.log(e + ' then'))
  .catch((e) => console.log(e + ' catch'))
  .finally((e) => console.log('\nthis is finally\n'));
