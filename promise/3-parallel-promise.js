const firstPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Hello 1'), 5000);
});

const secondPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Hello 2'), 7000);
});

const thirdPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Hello 3'), 1000);
});

const allPromise = (promises) => {
  return new Promise((resolve) => {
    if (!Array.isArray(promises) || promises.length < 0) resolve([]);

    let length = 0;
    let arrayResult = [];

    const resolveFn = (value) => {
      length++;
      arrayResult.push(value);
      if (length === promises.length) {
        resolve(arrayResult);
      }
    };

    for (i = 0; i < promises.length; i++) {
      console.log(promises[i]);
      promises[i].then((e) => resolveFn(e));
    }
  });
};

console.log(
  allPromise([firstPromise, secondPromise, thirdPromise]).then((e) =>
    console.log(e)
  )
);

Promise.any([firstPromise, secondPromise, thirdPromise]).then((e) =>
  console.log(e + '\npromise any\n')
);

Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then((e) =>
  console.log(e + '\npromise all settled\n')
);
