const firstPromise = new Promise((firstResolve) => {
  setTimeout(() => {
    console.log('first resolved');
    return firstResolve(
      new Promise((secondResolve) => {
        setTimeout(() => {
          console.log('second resolved');
          return secondResolve('Hello there');
        }, 3000);
      })
    );
  }, 2000);
});

firstPromise.then((e) => console.log(e));
